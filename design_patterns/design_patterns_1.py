# factorial

def fact(x):
    if x == 0:
        return 1
    else:
        return x * fact(x-1)
    
    
def f(x,b):
    if x == 0:
        return 1
    else:
        temp = x ** b
        return fact(temp)
    
    
    

