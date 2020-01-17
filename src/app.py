import tornado.web

class Mainhandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello!你屁话可真多")