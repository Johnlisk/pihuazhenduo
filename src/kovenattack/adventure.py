#冒险
import random
advevents=[
    {
        "id":1,
        "name":"获得3氦气",
        "type":1,
        "kind":0,
        "hegas":3,
    }
]

class adventure(object):
    def __init__(self):
        advmap=[advevents[random.randint(0,len(advevents))] for i in range(0,20)]