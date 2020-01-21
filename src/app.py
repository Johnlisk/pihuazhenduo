import tornado.web
import logging

class Mainhandler(tornado.web.RequestHandler):
    def get(self):
        logger = logging.getLogger(name="tornado-logs")
        logger.info("damn")
        self.write("Hello!你屁话可真多")