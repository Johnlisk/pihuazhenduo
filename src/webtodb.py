import asyncio
import aiomysql
import logging; logging.basicConfig(level=logging.INFO)

# 此处添加配置
db_conf = {
	"host": "localhost",
	"port": 3306,
	"user": "root",
	"password": "wrq0729",
	"database": "",
	"charset": "utf-8",
	"autocommit": True,
	"maxsize": 10,
	"minsize": 1
}

async def create_pool(loop, **kw):
	global __pool
	#使用单独配置的情况，使用这种配置的情况下可以不用kw参数，最终目的是保存配置文件在单独的文件方便部署和维护
	__pool = await aiomysql.create_pool(**db_conf)
	__pool = await aiomysql.create_pool(
		host = kw.get('host', 'localhost'),
		port = kw.get('port', 3306),
		user = kw.get('user', 'root'),
		password = kw.get('password', 'wrq0729.'),
		db = kw['db'],
		charset = kw.get('charset', 'utf-8'),
		autocommit = kw.get('autocommit', True),
		maxsize = kw.get('maxsize', 10),
		minsize = kw.get('minsize', 1),
		loop = loop
		)

async def select(sql, args, size=None):
	# sql as 'select ? from ? where ?=?'  args as ['*', 'users', 'id', '5']
	logging.info(sql, args)
	global __pool
	with (await __pool) as conn:
		cur = await conn.cursor(aiomysql.DictCursor)
		await cur.execute(sql.replace('?', '%s'), args or ())
		if size:
			rs = await cur.fetchmany(size)
		else:
			rs = await fetchall()
		await cur.close()
		logging.info('rows returned:%s' % len(rs))
		return rs

async def execute(sql, args):
	# sql as 'insert/update/delete ?=? from ?' args as ['id', '5', 'users']
	logging.info(sql, args)
	global __pool
	with (await __pool) as conn:
		try:
			cur = await conn.cursor()
			await cur.execute(sql.replace('?', '%'), args or ())
			affected = cur.rowcount
			await cur.close()
		except BaseException as e:
			raise
	return affected

#在此处调用文件中的方法进行测试
if __name__=="__main__":
	pass