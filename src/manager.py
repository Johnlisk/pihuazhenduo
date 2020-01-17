import tornado.web
import tornado.ioloop

import logging
import app

log_config = {
    "logfilename": "tornado-logs",  # log 名称
    "setlevel": "info",  # log 级别
    "maxsize": 200,  # log 单个文件最大(200M)
    "backupcount": 20  # log 保留个数
}

if __name__=="__main__":
    logger = logging.getLogger(name="tornado-logs")
    consolehandler=logging.StreamHandler()
    filehandler=logging.FileHandler(filename="tornado-logs")
    consolehandler.setFormatter("simple")
    filehandler.setFormatter("simple")
    logger.addHandler(consolehandler)
    logger.addHandler(filehandler)
    logger.info("---------------PHZD backend start----------------")
    application=tornado.web.Application([(r"/",app.Mainhandler)])
    application.listen(8888)
    tornado.ioloop.IOLoop.current().start()
    logger.info("---------------PHZD backend started----------------")