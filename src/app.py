import tornado.web
import logging

class Mainhandler(tornado.web.RequestHandler):
    def get(self):
        logger = logging.getLogger(name="tornado-logs")
        logger.info("damn")
        self.write("Hello!你屁话可真多")

class BlogMainHandler(tornado.web.RequestHandler):
    def get(self):
        logger = logging.getLogger(name="tornado-logs")
        logger.info("damn")
        resdict = {
            "username":"qwer",
            "age":18,
            "bloglist":[1,2,3,4,5,6,7,8,9]
        }
        self.render("templates/blog.html",resultdict=resdict)