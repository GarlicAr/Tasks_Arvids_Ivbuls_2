#function f(x*b)^b
def f(x, b):
    if b == 0:
        return 1
    temp = x*b
    for i in range(1, b):
        temp *= x * b
    return temp


skaitlis = int(input("Ievadi skaitli X:\n"))
pakape = int(input("Ievadi pakāpi N:\n"))

result = f(skaitlis, pakape)

print(f"{skaitlis}*{pakape}={skaitlis*pakape}^{pakape}= {result}")