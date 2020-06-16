import tornado.web
import logging
import datetime
import markdown

from utils import DatabaseUtil,RedisUtil

class Cloudcheers(tornado.web.RequestHandler):

    def pushcontext(self):
        return_dict={}
        type=self.get_argument("type")
        place = self.get_argument("place")
        context = self.get_argument("context")

        return return_dict

    def getcontext(self):
        return_dict={}
        type=self.get_argument("type")

        return return_dict
