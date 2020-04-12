#define model for all type of elements 
class Model(dict):

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
			# '__mappings__' is undefined now, it will be defined in metaclass.
			field = self.__mappings__[key]
			if field.default:
				value = field.default() if callable(field.default) else field.default
				logging.debug('using default value for %s: %s' % (key, str(value)))
				setattr(self, key, value)
		return value

#define field, such as str, int, etc.
class Field(object):
	#定义子类时，应按照下述顺序给定参数
	def __init__(self, name, column_type, primary_key, default):
		self.name = name
		self.column_type = column_type
		self.primary_key = primary_key
		self.default = default

	def __str__(self):
		return '<%s, %s:%s>' % (self.__class__.__name__, self.column_type, self.name)


class StringField(Field):
	def __init__(self, name=None, primary_key=False, default=None, ddl='varchar(100)'):
		#this order refer to line 32.
		super().__init__(name, ddl, primary_key, default)


class IntField(Field):

	def __init__(self, name=None, primary_key=False, default=None, ddl='varchar(50)'):
		super().__init__(name, ddl, primary_key, default)


if __name__ == '__main__':
	user = Model(id=3, name='nmb', n=None)
	sfield = StringField('nb', True, 'nmsl')
	print(sfield.column_type)