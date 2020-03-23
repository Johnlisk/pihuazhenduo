import tornado.web
import logging
import datetime

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
        resdict = {
            "pagenum": 10,
            "setpage": 1,
            "bloglist": [
                {
                    "articleid": 1,
                    "title": "奤猫正传",
                    "readnum": "1000",
                    "thumbnum": 99,
                    "thumbed": 1,
                    "time":"2019-03-18",
                    "user": "jaderabbit",
                    "simplecontext": "奤，字如其字，大脸猫。",
                    "tags": [{"tagid": 1, "tag": "生活"}, {"tagid": 2, "tag": "感想"}]
                }, {
                    "articleid": 2,
                    "title": "一名剧本杀瘾君子的自述",
                    "readnum": "1000",
                    "thumbnum": 99,
                    "thumbed": 1,
                    "time": "2019-03-03",
                    "user": "jaderabbit",
                    "simplecontext": "",
                    "tags": [{"tagid": 1, "tag": "生活"}, {"tagid": 2, "tag": "感想"}]
                }, {
                    "articleid": 3,
                    "title": "(记录性转载)工作迷思：游戏文本创作中的七十二处女难题",
                    "readnum": "1000",
                    "thumbnum": 99,
                    "thumbed": 1,
                    "time": "2019-03-10",
                    "user": "jaderabbit",
                    "simplecontext": "原文链接:https://zhuanlan.zhihu.com/p/53888954",
                    "tags": [{"tagid": 1, "tag": "生活"}, {"tagid": 2, "tag": "感想"}]
                }, {
                    "articleid": 4,
                    "title": "我的一个与众不同的女同学",
                    "readnum": "1000",
                    "thumbnum": 99,
                    "thumbed": 1,
                    "time": "2019-03-23",
                    "user": "jaderabbit",
                    "simplecontext": "这是一个被随波逐流的人欺负的人的故事",
                    "tags": [{"tagid": 1, "tag": "生活"}, {"tagid": 2, "tag": "感想"}]
                }, {
                    "articleid": 5,
                    "title": "平衡",
                    "readnum": "1000",
                    "thumbnum": 99,
                    "thumbed": 1,
                    "time": "2019-04-23",
                    "user": "jaderabbit",
                    "simplecontext": "",
                    "tags": [{"tagid": 1, "tag": "生活"}, {"tagid": 2, "tag": "感想"}]
                }
            ]
        }
        self.render("templates/bloglist.html", resultdict=resdict)


class BlogDetailHandler(BaseHandler):
    def get(self):
        logger = logging.getLogger(name="tornado-logs")
        logger.info("blogdetail")
        # article = self.request.query
        articleid=self.get_query_argument('articleid')
        logger.info(articleid)
        titledict={1:"奤猫正传",2:"一名剧本杀瘾君子的自述",
                   3:"(记录性转载)工作迷思：游戏文本创作中的七十二处女难题",
                   4:"我的一个与众不同的女同学",5:"平衡"}
        with open(f"static/articles/{articleid}.txt",'r') as f:
            lines=f.readlines()
            resdict = {
                "articleid": articleid,
                "title": titledict[articleid],
                "readnum": "1000",
                "thumbnum": 99,
                "thumbed": 1,
                "time": str(datetime.datetime.now()),
                "user": "jaderabbit",
                "simplecontext": "这是一个不一般的故事。。。",
                "context": lines
            }
            self.render("templates/blog.html", resultdict=resdict)
