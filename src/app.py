import tornado.web
import logging
import datetime
import markdown

from utils import DatabaseUtil


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


class BlogMainHandler(BaseHandler):
    def get(self):
        logger = logging.getLogger(name="tornado-logs")
        logger.info("damn")
        bloglist=[]
        with DatabaseUtil() as cur:
            select_sql = """select id,title,filename,simplecontext,user,create_time,type from pihuazhenduo.articles"""
            cur.execute(select_sql)
            res = cur.fetchall()
            print(res)
            for data in res:
                bloglist.append(
                    {
                        "articleid": data[0],
                        "title": data[1],
                        "time": str(data[5])[:19],
                        "user":  data[4],
                        "simplecontext": data[3] if data[3] else '',
                        "type":data[6]
                    }
                )
        resdict = {
            "pagenum": 10,
            "setpage": 1,
            "bloglist": bloglist
        }
        self.render("templates/bloglist.html", resultdict=resdict)


class BlogDetailHandler(BaseHandler):
    def get(self):
        logger = logging.getLogger(name="tornado-logs")
        logger.info("blogdetail")
        # article = self.request.query
        articleid = self.get_query_argument('articleid')
        logger.info(articleid)
        with DatabaseUtil() as cur:
            select_sql = """select title,filename,simplecontext,user,create_time,type 
                            from pihuazhenduo.articles
                            where id =%s"""
            plist=[articleid,]
            cur.execute(select_sql,plist)
            res = cur.fetchone()

        titledict = {1: "奤猫正传", 2: "一名剧本杀瘾君子的自述",
                     3: "(记录性转载)工作迷思：游戏文本创作中的七十使二处女难题",
                     4: "我的一个与众不同的女同学", 5: "平衡",
                     6: "C# winform中无边框窗体的移动",
                     7: "NoesisGUI入门及初步使用感想",
                     8: "用xlwt导出django admin中查看的数据"}
        with open(f"static/articles/{articleid}.txt", 'r') as f:
            lines = f.readlines()
            resdict = {
                "articleid": articleid,
                "title": res[0],
                "readnum": "1000",
                "thumbnum": 99,
                "thumbed": 1,
                "time": str(res[4])[:19],
                "user":res[3],
                "simplecontext": res[2],
                "context": lines
            }
            self.render("templates/blog.html", resultdict=resdict)


class MdtestHandler(BaseHandler):
    def get(self):
        logger = logging.getLogger(name="tornado-logs")
        logger.info("blogdetail")
        # article = self.request.query

        with open(f"static/articles/9.md", 'r') as f:
            lines = markdown.markdown(f.read())
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
