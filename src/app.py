import tornado.web
import logging
import datetime
import markdown

from utils import DatabaseUtil,RedisUtil
from markdown.extensions import Extension
from markdown.extensions.fenced_code import FencedCodeExtension
from markdown.extensions.tables import TableExtension


class BaseHandler(tornado.web.RequestHandler):
    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "*")  # 这个地方可以写域名
        self.set_header("Access-Control-Allow-Headers", "*")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')

    # 定义一个响应OPTIONS 请求，不用作任务处理
    def options(self):
        # no body
        self.set_default_headers()
        self.set_status(204)
        self.finish()


class Mainhandler(BaseHandler):
    def get(self):
        logger = logging.getLogger(name="tornado-logs")
        logger.info("damn")
        resdict = {
            "username": "qwer",
            "age": 18,
            "bloglist": [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
        self.render("templates/main.html", resultdict=resdict)

class TagListHandler(BaseHandler):
    def get(self):
        logger = logging.getLogger(name="tornado-logs")
        logger.info("TagListHandler")
        taglist=[]
        with DatabaseUtil() as cur:
            select_sql = """select id,title,filename,simplecontext,user,create_time,type 
                            from pihuazhenduo.articles 
                            order by create_time desc"""
            cur.execute(select_sql)
            res = cur.fetchall()
            print(res)
            for data in res:
                taglist.append(
                    {
                        "articleid": data[0],
                        "title": data[1],
                        "time": str(data[5])[:19],
                        "user": data[4],
                        "simplecontext": data[3] if data[3] else '',
                        "type": data[6]
                    }
                )
        resdict = {
            "pagenum": 10,
            "setpage": 1,
            "bloglist": taglist
        }
        self.render("templates/bloglist.html", resultdict=resdict)





class BlogMainHandler(BaseHandler):
    def gettag(self):
        with DatabaseUtil() as cur:
            select_sql = """
                select id,name,type
                  from pihuazhenduo.articles"""
            cur.execute(select_sql)
            res = cur.fetchall()



        pass

    def get(self):
        logger = logging.getLogger(name="tornado-logs")
        logger.info("damn")
        tagid = self.get_query_argument('articleid')
        bloglist = []
        with DatabaseUtil() as cur,RedisUtil(1) as redis:
            select_sql = """
                select id,title,filename,simplecontext,user,create_time,type 
                  from pihuazhenduo.articles 
              order by create_time desc"""
            cur.execute(select_sql)
            res = cur.fetchall()
            for data in res:
                bloglist.append(
                    {
                        "pv":redis.hget("article_pv",data[0]),
                        "articleid": data[0],
                        "title": data[1],
                        "time": str(data[5])[:19],
                        "user": data[4],
                        "simplecontext": data[3] if data[3] else '',
                        "type": data[6]
                    }
                )
        resdict = {
            "pagenum": 10,
            "setpage": 1,
            "bloglist": bloglist
        }
        self.render("templates/bloglist.html", resultdict=resdict)


class BlogDetailHandler(BaseHandler):
    def gettxt(self, filename, articleid, title, time, user, simplecontext):
        with open(f"static/articles/{filename}.txt", 'r') as f:
            lines = f.readlines()
            resdict = {
                "articleid": articleid,
                "title": title,
                "readnum": "1000",
                "thumbnum": 99,
                "thumbed": 1,
                "time": time,
                "user": user,
                "simplecontext": simplecontext,
                "context": lines
            }
            self.render("templates/blog.html", resultdict=resdict)

    def getmd(self, filename, articleid, title, time, user, simplecontext):
        with open(f"static/articles/{filename}.md", 'r') as f:
            lines = markdown.markdown(f.read(), extensions=['markdown.extensions.fenced_code',
                                                            'markdown.extensions.tables']).encode("utf-8")
            resdict = {
                "articleid": articleid,
                "title": title,
                "readnum": "1000",
                "thumbnum": 99,
                "thumbed": 1,
                "time": time,
                "user": user,
                "simplecontext": simplecontext,
                "context": lines
            }
            self.render("templates/blogmd.html", resultdict=resdict)

    def get(self):
        logger = logging.getLogger(name="tornado-logs")
        logger.info("blogdetail")
        # article = self.request.query
        articleid = self.get_query_argument('articleid')
        logger.info(articleid)
        with RedisUtil(1) as redis:
            redis.hincrby("article_pv",articleid,1)

        with DatabaseUtil() as cur:
            select_sql = """select title,filename,simplecontext,user,create_time,type 
                            from pihuazhenduo.articles
                            where id =%s"""
            plist = [articleid, ]
            cur.execute(select_sql, plist)
            res = cur.fetchone()

            articlethings = {"filename": articleid,
                             "articleid": articleid,
                             "title": res[0],
                             "time": str(res[4])[:19],
                             "user": res[3],
                             "simplecontext":res[2]}
            if res[5]==0:
                self.gettxt(**articlethings)
            else:
                self.getmd(**articlethings)


class MdtestHandler(BaseHandler):
    def get(self):
        logger = logging.getLogger(name="tornado-logs")
        logger.info("blogdetail")
        # article = self.request.query

        with open(f"static/articles/9.md", 'r') as f:
            lines = markdown.markdown(f.read(), extensions=['markdown.extensions.fenced_code',
                                                            'markdown.extensions.tables']).encode("utf-8")
            resdict = {
                "articleid": 123,
                "title": "md测试",
                "readnum": "1000",
                "thumbnum": 99,
                "thumbed": 1,
                "time": str(datetime.datetime.now()),
                "user": "jaderabbit",
                "simplecontext": "这是一个不一般的故事。。。",
                "context": lines
            }
            self.render("templates/blogmd.html", resultdict=resdict)
