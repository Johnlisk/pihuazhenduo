import asyncio
import aiomysql
import logging; logging.basicConfig(level=logging.INFO)

class ModelMetaclass(type):

	def __new__(cls, name, bases, attrs):
		#no model
		if name == 'Model':
			return type.__new__(cls, name, bases, attrs)
		table = attrs.get('__table__', None) or name
		logging.info('found model: %s (table: %s)' % (name, table))
		mappings = {}
		fields = []
		primaryKey = None
		for k, v in attrs.items():
			if not '__' in k:
				mappings[k] = v
				logging.info('found mapping: %s => %s' % (k, v))
				if not isinstance(v, str) and v.primary_key:
					if primaryKey:
						raise RuntimeError('Duplicate primary key for field %s' % k)
					primaryKey = k
				else:
					fields.append(k)
		#list 'fields' have all key in dict 'attrs' except primary key.
		if not primaryKey:
			raise RuntimeError('Primary key is not found.')
		for k in mappings.keys():
			attrs.pop(k)
		#use map to generate a list called escaped_fields which translates every %s in fields to `%s`
		escaped_fields = list(map(lambda x: '`%s`' % x, fields))
		attrs['__mappings__'] = mappings
		attrs['__table__'] = table
		attrs['__primary_key__'] = primaryKey
		attrs['__fields__'] = fields
		#in follow example, id is primary key.
		#select sql as select `id`, `name`, `gender` from `Users` 
		attrs['__select__'] = 'select `%s`, %s from `%s`' % (primaryKey, ', '.join(escaped_fields), table)
		#insert sql as insert into `Users` (`name`, `gender`, `id`) values (?, ?, ?)
		#create_args_string() need to write.
		attrs['__insert__'] = 'insert into `%s` (%s, `%s`) values (%s)' % (table, ', '.join(escaped_fields), primaryKey, ', '.join(['?' for _ in range(len(escaped_fields)+1)]))
		#update sql as update `Users` set `name`=?, `gender`=? where `id` = ?
		#?.replace need to translate by webtodb.execute
		attrs['__update__'] = 'update `%s` set %s where `%s` = ?' % (table, ', '.join(map(lambda f: '`%s`=?' % (mappings.get(f).name or f), fields)), primaryKey)
		#delete sql as delete from `Users` where `id`=?
		attrs['__delete__'] = 'delete from `%s` where `%s`=?' % (table, primaryKey)
		return type.__new__(cls, name, bases, attrs)



#define model for all type of elements
class Model(dict, metaclass=ModelMetaclass):

	def __init__(self, **kw):
		super(Model, self).__init__(**kw)

	def __getattr__(self, key):
		try:
			return self[key]
		except KeyError as e:
			raise AttributeError(r"'Model' has no attribute as '%s'" % key)

	def __setattr__(self, key, value):
		self[key] = value

	def getValue(self, key):
		return getattr(self, key)

	def getValueOrDefault(self, key):
		value = getattr(self, key)
		if not value:
			field = self.__mappings__[key]
			if field.default:
				value = field.default() if callable(field.default) else field.default
				logging.debug('using default value for %s: %s' % (key, str(value)))
				setattr(self, key, value)
		return value

	@classmethod
	async def find(cls, primarykey):
		#find someone by primary key.
		#the order of args refer to webtodb.select which is sql, args, size.
		result = await select('%s where `%s`=?' % (cls.__select__, cls.__primary_key__), [primarykey], 1)
		if len(result) == 0:
			return None
		return cls(**rs[0])

#define field, such as str, int, etc.
class Field(object):
	#When defining subclasses, arguments should be given in the order of the parent class.
	def __init__(self, name, column_type, primary_key, default):
		self.name = name
		self.column_type = column_type
		self.primary_key = primary_key
		self.default = default

	def __str__(self):
		return '<%s, %s:%s>' % (self.__class__.__name__, self.column_type, self.name)


class StringField(Field):
	def __init__(self, name=None, primary_key=False, default=None, ddl='varchar(100)'):
		#this order refer to Field.
		super().__init__(name, ddl, primary_key, default)


class IntField(Field):

	def __init__(self, name=None, primary_key=False, default=None, ddl='varchar(50)'):
		#same as StringField.
		super().__init__(name, ddl, primary_key, default)

class FloatField(Field):

	def __init__(self, name=None, primary_key=False, default=None, ddl='varchar(50)'):
		super().__init__(name, ddl, primary_key, default)

class TextField(Field):

	def __init__(self, name=None, primary_key=False, default=None, ddl='varchar(500)'):
		super().__init__(name, ddl, primary_key, default)





if __name__ == '__main__':
	pass