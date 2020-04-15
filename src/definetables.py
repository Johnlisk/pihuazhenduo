import asyncio
import aiomysql
import logging; logging.basicConfig(level=logging.INFO)
from definemodels import Model, StringField, IntField
from webtodb import select
class User(Model):
	__table__ = 'Users'

	id = IntField(primary_key=True)
	name = StringField()
	gender = StringField(ddl='varchar(10)')

user = User(id=1, name='Wang', gender='male')


async def p(cls):
	await cls.find('1')

print(p(User))