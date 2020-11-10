import tornado.web
import logging
import datetime
import markdown
import redis

from utils import DatabaseUtil,RedisUtil

class Cloudcheers(tornado.web.RequestHandler):

    def pushcontext(self):
        return_dict={}
        type=self.get_argument("type")
        place = self.get_argument("place")
        context = self.get_argument("context")
        data={"type":type,
              "place":place,
              "context":context}
        #Todo:随机推进某个redis队列

        return return_dict

    def getcontext(self):
        return_dict={}
        type=self.get_argument("type")
        # Todo:随机从某个redis队列推出

        return return_dict


