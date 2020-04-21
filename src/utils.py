import configparser
import psycopg2
import redis

class DatabaseUtil(object):
    def __init__(self):
        conf = configparser.ConfigParser()
        conf.read("config.conf")
        connconf = conf._sections["database_onclient"]
        self.dbconn = psycopg2.connect(**connconf)
        self.cur = self.dbconn.cursor()

    def __enter__(self):
        return self.cur

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.cur.close()
        self.dbconn.close()


class RedisUtil(object):
    def __init__(self,dbnum):
        conf = configparser.ConfigParser()
        conf.read("config.conf")
        connconf = conf._sections["redis"]
        self.redisconn = redis.StrictRedis(**connconf,db=dbnum)

    def __enter__(self):
        return self.redisconn

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.redisconn.close()
