from multiprocessing import Manager, Pool,active_children
import concurrent.futures
import logging
import math
import time

logger=logging.Logger(name='123')
consolehandler = logging.StreamHandler()
filehandler = logging.FileHandler(filename="tornado-l")
logger.addHandler(consolehandler)
logger.addHandler(filehandler)

def handle(q):
    data = q
    data += 1
    time.sleep(2)
    return data


datas = [1, 2, 3, 4, 5, 6,7]  # 获取数据

if __name__ == "__main__":
    onlock_dict = Manager().dict()  # 作为锁使用的字典
    queue = Manager().Queue()  # 通信用队列
    # with Pool(processes=3) as pool:
    #     print(active_children())
    #     print(pool.map(handle,datas))


    with concurrent.futures.ProcessPoolExecutor(3) as executor:
        print(active_children())
        for number, prime in zip(datas, executor.map(handle, datas)):
            print(active_children())
            print('%d is prime: %s' % (number, prime))
        print(active_children())
