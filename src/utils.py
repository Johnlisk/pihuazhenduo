import configparser
import psycopg2

class DatabaseUtil(object):
    def __init__(self):
        conf = configparser.ConfigParser()
        conf.read("config.conf")
        dbhost = conf.get("database_onclient", "host")
        connconf = conf._sections["database_onclient"]
        self.dbconn = psycopg2.connect(**connconf)
        self.cur = self.dbconn.cursor()

    def __enter__(self):
        return self.cur

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.cur.close()
        self.dbconn.close()
