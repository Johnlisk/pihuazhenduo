#玩家军团

class player(object):
    def __init__(self):
        self.metal=0
        self.hegas=0
        self.efood=0

        self.mine=[]
        self.satellites=[]
        self.farm=[]

        self.engineer=0
        self.canoon=0
        self.mecha=0

        # self.engineerlevel = 0
        # self.canoon = 0
        # self.mecha = 0

    def buildengineer(self,num=1):
        efoodneed=num*5
        if self.efood>efoodneed:
            self.efood-=efoodneed
            self.engineer+=num

    def buildcannon(self,num=1):
        hegasneed = num * 5
        if self.hegas > hegasneed:
            self.hegas -= hegasneed
            self.canoon += num

    def buildmecha(self,num=1):
        metalneed = num * 5
        if self.metal > metalneed:
            self.metal -= metalneed
            self.mecha += num