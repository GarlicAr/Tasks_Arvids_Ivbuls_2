print("Hello world!")


# python is case sensitive

#variables


apple_radius=5.5
days_in_august=31
growth_rate=1e-2
#use case
is_apple_ready=False
apple_brand="Rubins"
apple_radius_in_september=apple_radius+days_in_august*growth_rate



#tabs,colon:
is_perfect_size=False
APPLE_READY_THRESHOLD = 5.502
    
if apple_radius_in_september >5.502 and apple_radius_in_september <5.504:
    is_perfect_size=True
elif is_apple_ready==True:
    print('2nd grade')
    
    
    
#apples in box

apples_in_box=0




is_adding=True
while is_adding:
    apples_in_basket = input("how many apples in basket ?")
    apples_in_basket=int(apples_in_basket)

    apples_in_box += apples_in_basket

    str_output = '\n apples in box: '+str(apples_in_box)
    print(str_output)
    print(f'apples in box:  {apples_in_box}')
    answer=input("do you want to add more apples ? y/n")
    answer = answer.strip()
    if answer == 'n':
        is_adding=False
        
        
#apple colors

apple_colors=[]
for i in range(0, apples_in_box): #0 1 2 3
    color='r'
    # f loor_i = i //2
    if i % 2 == 0:
        color='g'
    apple_colors.append(color)
print(apple_colors)


apple_colors_1=['r','g','g']
apple_colors_2=['r','g','g']


for i in range(3):
    apple_colors_1.append(apple_colors_2[i])


apple_colors_1.append('y')

print(apple_colors_1, apple_colors_2)
    

def make_apples_red(apples_input):
    is_succes=False
    for i in range(len(apples_input)):
        if apples_input[i] != 'r':
            apples_input[i] = 'r'
            is_succes=True
    return is_succes

def make_apple_red(apple):
    if apple != 'r':
        apple = 'r'
    return apple

apple='g'

print(f'begfore: {apple}')
apple=make_apple_red(apple)
print(f'after: {apple}')


print(f'before: {apple_colors}')
is_succes=make_apples_red(apple_colors)
print(f'after: {apple_colors}')


def pow(x,n):
    result = x
    for _ in range(n-1):
        result *= x
    return result

def pow_rec(x,n):
    result = x
    if n > 1:
        result = pow_rec(x, n-1 ) * x
    return result

print(pow_rec(3, 3))

def fact(x):
    result = 1
    if x > 1:
        result - fact(x-1)*x
    return result

def f(x,b):
    res_inner = pow_rec(x,b)
    res_final = fact(res_inner)
    return res_final

print(fact(5,2))



# klases


class Position:
    def __init__(self):
        self.x = 0 
        self.y = 0
        
        #encapsulation
        
    def get_x(self): #getter
        return self.__x
    
    def get_y(self):
        return self.__y
    
    def set_x(self, x):
        self.__x=x
        
    def set_y(self, y):
        self.__y=y
        
        
    def copy(self, other_position):
        self.x=other_position.x
        self.y=other_position.y
        



actor1_pos=Position()
actor2_pos=Position()

actor1_pos.copy(actor2_pos)

actor1_pos.x=1


print(actor1_pos.x, actor2_pos.x)


## Inheritance, parmantosana

class MoveableObject:
    def __init__(self):
        self._position = Position()
        
        
class AnimalHead:
    def __init__(self):
        self.brain_capacity = 1.0
        
        
# OOP- 2. Inheritance

class Animal(MoveableObject):
    def __init__(self):
        super().__init__()
        self._position.set_x(10)
        self.hunger_perc=1.0
        self.head = AnimalHead()
        
    def eat(self, calories):
        self.hunger_perc-=calories *0.1
        
        
        
        
animal_1=Animal()

# Polimorfisms

class Dog(Animal):
    def __init__(self):
        super().__init__()
        self.bones_hidden=0
        
        
class Cat(Animal):
    def __init__(self):
        super().__init__()
        self.items_destroyed = 0
        
        
class Robot(MoveableObject):
    def __init__(self):
        super().__init__()
        
        
dog = Dog()
cat=Cat()
robot = Robot()

actors = [dog,cat,robot]

for actors in actors:
    if isinstance(actors, Animal):
        actors.eat(100)
        
        
        

