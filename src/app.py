import tornado.web
import logging
import datetime


class Mainhandler(tornado.web.RequestHandler):
    def get(self):
        logger = logging.getLogger(name="tornado-logs")
        logger.info("damn")
        resdict = {
            "username": "qwer",
            "age": 18,
            "bloglist": [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
        self.render("templates/main.html", resultdict=resdict)


class BlogMainHandler(tornado.web.RequestHandler):
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
                    "simplecontext":"这是一个不一般的故事。。。",
                    "tags":[{"tagid":1,"tag":"生活"},{"tagid":2,"tag":"感想"}]
                }, {
                    "articleid": 2,
                    "title": "asdf",
                    "readnum": "1000",
                    "thumbnum": 99,
                    "thumbed": 1,
                    "user": "jaderabbit",
                    "simplecontext":"这是一个不一般的故事。。。",
                    "tags":[{"tagid":1,"tag":"生活"},{"tagid":2,"tag":"感想"}]
                }, {
                    "articleid": 3,
                    "title": "zxcv",
                    "readnum": "1000",
                    "thumbnum": 99,
                    "thumbed": 1,
                    "user": "jaderabbit",
                    "simplecontext":"这是一个不一般的故事。。。",
                    "tags":[{"tagid":1,"tag":"生活"},{"tagid":2,"tag":"感想"}]
                }
            ]
        }
        self.render("templates/bloglist.html", resultdict=resdict)


class BlogDetailHandler(tornado.web.RequestHandler):
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
