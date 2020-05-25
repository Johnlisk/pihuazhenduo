import tornado.web
import tornado.ioloop
import tornado.httpserver as httpserver
import tornado.ioloop as ioloop
import tornado.log as tlog

import logging
import app
import configparser
import socket


log_config = {
    "logfilename": "tornado-logs",  # log 名称
    "setlevel": "info",  # log 级别
    "maxsize": 200,  # log 单个文件最大(200M)
    "backupcount": 20  # log 保留个数
}

if __name__ == "__main__":
    logger = logging.getLogger(name="tornado-logs")
    logger.setLevel('DEBUG')
    consolehandler = logging.StreamHandler()
    filehandler = logging.FileHandler(filename="tornado-logs")
    logger.addHandler(consolehandler)
    logger.addHandler(filehandler)
    logger.info("---------------PHZD backend start----------------")
    application = tornado.web.Application([(r"/", app.Mainhandler),
                                           (r"/blog/", app.BlogMainHandler),
                                           (r"/blog/aboutme/", app.AboutmeHandler),
                                           (r"/blog/detail/", app.BlogDetailHandler),
                                           (r"/blog/mdtest/", app.MdtestHandler)], debug=True)
    # http_server=httpserver.HTTPServer(application)
    # http_server.bind(port=8888,address="0.0.0.0")
    # http_server.start(2)
    # ioloop.IOLoop.current().start()
    # self.recSocket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    # self.recSocket.settimeout(CHECK_TIMEOUT)
    # self.recSocket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    # self.recSocket.bind(('', UDP_PORT))

    application.listen(port=8887, address="0.0.0.0")
    tornado.ioloop.IOLoop.current().start()
    logger.info("---------------PHZD backend started----------------")
