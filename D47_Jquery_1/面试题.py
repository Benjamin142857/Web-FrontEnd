"""
# 编写代码实现func函数，使其实现以下效果
foo = func(8)
print(foo(8))  # 输出64
print(foo(-1)) # 输出-8

# 用两个栈实现消息队列
"""

def func(x1):
    def inner(x2):
        return x1*x2

    return inner

def f1(f2):
    def inner(x, qq):
        if qq:
            return f2(x)

        else:
            return 'Not Login'

    return inner


@f1
def f2(x):
    return 2*x

if __name__ == '__main__':
    print(f2(2, qq=False))