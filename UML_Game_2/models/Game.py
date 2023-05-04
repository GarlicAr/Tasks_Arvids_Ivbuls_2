from ast import List
from UML_Game_2.models.MapTile import MapTile
from UML_Game_2.models.Vector2D import Vector2D


class Game:
    def __init__(self,
                 map_size:Vector2D,
                 turn: int,
                 map_tiles: List(MapTile)):
        self.map_size=map_size
        self.turn=turn
        self.map_tiles=map_tiles
        