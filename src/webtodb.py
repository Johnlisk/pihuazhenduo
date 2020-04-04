import asyncio
import aiomysql
import logging; logging.basicConfig(level=logging.INFO)

async def create_pool(loop, **kw):
	global __pool
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

