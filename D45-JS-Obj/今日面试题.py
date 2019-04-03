"""
执行下面代码，l,m分别是什么
    
"""

import copy

def func(x):
    for k, v in copy.deepcopy(x).items():
        x[k+2] = v+2


if __name__ == '__main__':
    m = {1: 2, 3: 4}
    l = m
    l[9] = 10
    func(l)
    m[7] = 8

    print(l)
    print(m)

# l = {1: 2, 3: 4, 9: 10, 5: 6, 11: 12, 7: 8}
# m = {1: 2, 3: 4, 9: 10, 5: 6, 11: 12, 7: 8}
