#城市守军

class tower(object):
    def __init__(self):
        self.range=0
        self.life=0
        self.attack=0

    def rangecheck(self,r):
        if r<=self.range:
            return True
        else:
            return False

    def gotattack(self,attacknum):
        self.life-=attacknum
        if self.life<0:
            self.life=0

class mine(object):
    def __init__(self):
        self.range=0
        self.life=1
        self.attack=100

    def boomorbreak(self):
        self.life=0

class wall(object):
    def __init__(self):
        self.life=1000

    def gotattack(self,attacknum):
        self.life-=attacknum
        if self.life<0:
            self.life=0