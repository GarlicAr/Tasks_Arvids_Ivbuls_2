from ast import List
from UML_Game_2.enums.EnumSeason import EnumSeason
from UML_Game_2.enums.EnumTribes import EnumTribes
from UML_Game_2.models.Actor import Actor
from UML_Game_2.models.Vector2D import Vector2D


class MapTile:
    def __init__(self, position: Vector2D, 
                 season: EnumSeason, 
                 tribe: EnumTribes,
                 items_on_tile: List[Items],
                 actor_on_tile: List[Actor],
                 is_visible_for_tribe: List[EnumTribes]):
        self.position = position
        self.tribe = tribe
        self.items_on_tile = items_on_tile
        self.actor_on_tile = actor_on_tile
        self.is_visible_for_tribe= is_visible_for_tribe
        
        