"""
    1. 函数的定义
    2. 函数可以像变量一样赋值
    3. 函数可以放入容器中（元祖，列表，字典...）

    # 函数中
    4. 函数可以作为参数传参
    5. 函数可以作为返回值返回

    # 开放封闭原则
        1. 对添加功能是开放的
        2. 不能硬改已存在的代码，容易造成全局崩溃

    # 装饰器
        1. 不改变源代码
        2. 不改变调用方式
"""

# def f1():
#     def f2():
#         print('fuck you')
#         return 'fuck you mom'
#     return f2


def f2(fn):
    def inner(x):
        print('加点巧克力')
        fn(x)
        print('烤成蛋糕')

    return inner


@f2
def f1(aaa):
    print('加点牛奶，鸡蛋，面粉混在一起')
    print(aaa)


# f1 = f2(f1)


if __name__ == '__main__':
    f1('再加点抹茶')

