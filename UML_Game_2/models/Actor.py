from UML_Game_2.enums.EnumTribes import EnumTribes
from abc import ABCMeta, abstractmethod


class Actor:
    @abstractmethod
    def __init__(self, tribe: EnumTribes, 
                 coins_cost: int, 
                 move_steps: int, 
                 power_attack: int, 
                 power_defense: int, 
                 experience: int, 
                 level: int):
        self.tribe = tribe
        self.coins_cost = coins_cost
        self.move_steps = move_steps
        self.power_attack = power_attack
        self.power_defense = power_defense
        self.experience = experience
        self.level = level