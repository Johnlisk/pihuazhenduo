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
                    "title": "qwer",
                    "readnum": "1000",
                    "thumbnum": 99,
                    "thumbed": 1,
                    "user": "jaderabbit",
                    "simplecontext": "这是一个不一般的故事。。。",
                    "tags": [{"tagid": 1, "tag": "生活"}, {"tagid": 2, "tag": "感想"}]
                }, {
                    "articleid": 2,
                    "title": "asdf",
                    "readnum": "1000",
                    "thumbnum": 99,
                    "thumbed": 1,
                    "user": "jaderabbit",
                    "simplecontext": "这是一个不一般的故事。。。",
                    "tags": [{"tagid": 1, "tag": "生活"}, {"tagid": 2, "tag": "感想"}]
                }, {
                    "articleid": 3,
                    "title": "zxcv",
                    "readnum": "1000",
                    "thumbnum": 99,
                    "thumbed": 1,
                    "user": "jaderabbit",
                    "simplecontext": "这是一个不一般的故事。。。",
                    "tags": [{"tagid": 1, "tag": "生活"}, {"tagid": 2, "tag": "感想"}]
                }
            ]
        }
        self.render("templates/bloglist/index.html", resultdict=resdict)


class BlogDetailHandler(BaseHandler):
    def get(self):
        logger = logging.getLogger(name="tornado-logs")
        logger.info("blogdetail")
        resdict = {
            "articleid": 1,
            "title": "qwer",
            "readnum": "1000",
            "thumbnum": 99,
            "thumbed": 1,
            "time": str(datetime.datetime.now()),
            "user": "jaderabbit",
            "simplecontext": "这是一个不一般的故事。。。",
            "context": "zxcvbnmqwer12d34"
        }
        self.render("templates/blog.html", resultdict=resdict)
