# -*- coding:utf-8 -*-
import time
import collections


class MemCache(object):
    __slots__ = ('cache', 'capacity')

    def __init__(self, capacity=50):
        self.cache = collections.OrderedDict()
        self.capacity = capacity
        # self.size = 0

    def get(self, key):
        if not key or type(key) != str:
            return None
        if key not in self.cache:
            return None
        map = self.cache.get(key, {})
        ctime = map.get('ctime', 0)
        expire = map.get('expire', 0)
        current_time = int(time.time())
        if ctime + expire >= current_time or expire == 0:
            try:
                self.cache.move_to_end(key)
            except:
                pass
            return map.get("value", None)
        else:
            try:
                self.cache.pop(key)
                # self.size = self.size - 1
            except:
                pass
            return None

    def set(self, key, value, expire=0):
        if expire < 0:
            expire = 0
        if key not in self.cache:
            if self.capacity <= len(self.cache):
                self.cache.popitem(last=False)
            # else:
            #     self.size = self.size + 1

        self.cache[key] = {"value": value, "ctime": int(time.time()), "expire": expire}


if __name__ == '__main__':
    mem = MemCache(2)
    mem.set("k1", 1, 1)
    mem.set("k2", 2)
    mem.set("k3", 4, 3)
    print('k1', mem.get("k1"))
    print('k2', mem.get('k2'))
    mem.set('k2', 3, 3)
    print('k2', mem.get('k2'))
    time.sleep(2)
    print('k2', mem.get('k2'))
    print('k1', mem.get('k1'))
    time.sleep(5)
    print('k2', mem.get('k2'))

