# 目标城市相关方法

class Kovencity(object):
    def __init__(self, id):
        if id:
            pass
        else:
            city=self.makecity()

    # 构建城市
    def makecity(self):
        line1 = [1,0,1]
        line2 = [0,2,0]
        line3 = [3,1,1]
        map = [line1,line2,line3]

        return map
