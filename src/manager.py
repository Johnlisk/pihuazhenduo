import tornado.web
import tornado.ioloop
import tornado.log as tlog

import logging
import app
import configparser


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
                                           (r"/blog/detail/", app.BlogDetailHandler),
                                           (r"/blog/mdtest/", app.MdtestHandler)], debug=True)
    application.listen(port=8888, address="0.0.0.0")
    tornado.ioloop.IOLoop.current().start()
    logger.info("---------------PHZD backend started----------------")
