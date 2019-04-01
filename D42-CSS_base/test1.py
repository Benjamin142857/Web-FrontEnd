import copy

if __name__ == '__main__':
    d1 = [
        {'name': 'benjamin', 'age':21},
        {'name': 'stella', 'age':20},
    ]
    d1.sort(key=lambda x:x['age'])
    print(d1)
