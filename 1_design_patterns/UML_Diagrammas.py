from enum import Enum

class Vector2D:
    def __init__(self, x, y):
        self.x = float(x)
        self.y = float(y)
        
    def get_x(self):
        return self.x
    
    def set_x(self, value):
        self.x=float(value)
        
    def get_y(self):
        return self.y
    
    def set_y(self,value):
        self.y=float(value)
        
class EnumSeason(Enum):
    none=0
    Winter=1
    Summer=2
    
    
class Land:
    pass
        
        
class Mountain:
    pass

class Water:
    pass

class Item:
    def __init__(self, is_consumable,coins_collect):
        self.is_consumable = bool(is_consumable)
        self.coins_collect= int(coins_collect)
        
    def get_is_consumable(self):
        return self.is_consumable
    
    def set_is_consumable(self, value):
        self._is_consumable = bool(value)
        
    def get_coins_collect(self):
        return self._coins_collect
    
    def set_coins_collect(self, value):
        self._coins_collect = int(value)
        
        
class Fruit:
    def collect():
        pass
    
class Building:
    def __init__(self, level):
        self.level = int(level)
    #get/ set
    def get_level(self):
        return self.level
    
    def set_level(self, level):
        self.level=int(level)
        
        
        
class Sawmill:
    pass

class City:
    pass

class Village:
    def capture():
        pass
    
    
class Knight(Vector2D):
    def __init__(self, x, y):
        super().__init__(x, y)
        
    def move(self, x, y):
        self.set_x(float(x))
        self.set_y(float(y))
        
        

class Horseman(Vector2D):
    def __init__(self, x, y):
        super().__init__(x, y)
        
    def move(self, x, y):
        self.set_x(float(x))
        self.set_y(float(y))
                
        
class Warrior(Vector2D):
    def __init__(self, x, y):
        super().__init__(x, y)
        
    def move(self, x, y):
        self.set_x(float(x))
        self.set_y(float(y))
        
        
class Tribe(Enum):
    none = 0
    Player = 1
    Opponent = 2

#Actor

class Actor(Vector2D):
    def __init__(self, x, y, tribe: Tribe ,coins_cost, move_steps, power_attack, power_defense, experience, level):
        super().__init__(x, y)
        self.tribe = tribe
        self.coins_cost = int(coins_cost)
        self.move_steps = int(move_steps)
        self.power_attack = int(power_attack)
        self.power_defense = int(power_defense)
        self.experience = int(experience)
        self.level = int(level)

#get/set
    def move(self, x, y):
        self.set_x(float(x))
        self.set_y(float(y))
        
    def get_tribe(self):
        return self.tribe

    def set_tribe(self, tribe):
        self.tribe = tribe

    def get_coins_cost(self):
        return self.coins_cost

    def set_coins_cost(self, coins_cost):
        self.coins_cost = int(coins_cost)

    def get_move_steps(self):
        return self.move_steps

    def set_move_steps(self, move_steps):
        self.move_steps = int(move_steps)

    def get_power_attack(self):
        return self.power_attack

    def set_power_attack(self, power_attack):
        self.power_attack = int(power_attack)

    def get_power_defense(self):
        return self.power_defense

    def set_power_defense(self, power_defense):
        self.power_defense = int(power_defense)

    def get_experience(self):
        return self.experience

    def set_experience(self, experience):
        self.experience = int(experience)

    def get_level(self):
        return self.level

    def set_level(self, level):
        self.level = int(level)
        
#MapTile
class MapTile(Vector2D):
    def __init__(self, x, y, season: EnumSeason, tribe: Tribe, items_on_tile, actor_on_tile, is_visible_for_tribe):
        super().__init__(x, y)
        self.season = season
        self.tribe = tribe
        self.items_on_tile = items_on_tile
        self.actor_on_tile = actor_on_tile
        self.is_visible_for_tribe = is_visible_for_tribe
#Get/Set
    def get_season(self):
        return self.season
    
    def set_season(self, season):
        self.season=season
    
    def get_tribe(self):
        return self.tribe
    
    def set_tribe(self, tribe):
        self.tribe = tribe
        
    def get_items_on_tile(self):
        return self.items_on_tile
    
    def set_items_on_tile(self, items):
        self.items_on_tile = items
        
    def get_actor_on_tile(self):
        return self.actor_on_tile
    
    def set_actor_on_tile(self, actor):
        self.actor_on_tile = actor
        
    def get_is_visible_for_tribe(self):
        return self.is_visible_for_tribe
    
    def set_is_visible_for_tribe(self, visible):
        self.is_visible_for_tribe = visible
    
        
    
        
#Game

class Game(Vector2D):
    def __init__(self, x, y, map_size, turn):
        super().__init__(x, y)
        self.map_size=int(map_size)
        self.turn = int(turn)
#get set
    def get_map_size(self):
        return self.map_size

    def set_map_size(self,map_size):
        self.map_size=int(map_size)

    def get_turn(self):
        return self.turn
    
    def set_turn(self, turn):
        self.turn=int(turn)
#pass
    def new_game():
        pass
    
    def get_map_tiles():
        pass
    
    def update_step():
        pass
        

        