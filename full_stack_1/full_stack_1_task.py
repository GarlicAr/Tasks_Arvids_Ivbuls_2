#function f(x*b)^b
def f(x, b):
    if b == 0:
        return 1
    temp = x*b
    for i in range(1, b):
        temp *= x * b
    return temp
