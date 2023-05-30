import random
from typing import List

from controllers.ControllerActor import ControllerActor
from models.Game import Game
from models.MapTile import MapTile
from models.Vector2D import Vector2D
from models.enums.EnumMapTileType import EnumMapTileType


class ControllerGame:
    def __init__(self):
        self.__actor_controllers: List[ControllerActor] = []

    @staticmethod
    def new_game():
        game = Game()

        game.map_size.x=100
        game.map_size.y=100

        for j in range(game.map_size.y):

            game.map_tiles.append([]) #rows add columns

            for i in range(game.map_size.x):
                map_tile=MapTile()

                random_tile_type = random.choice([
                    EnumMapTileType.Ground,
                    EnumMapTileType.Water
                ])

                map_tile.tile_type=random_tile_type


                game.map_tiles[j].append(map_tile)

        return game



        map_tile_default = MapTile()
        map_tile_default.tile_type = EnumMapTileType.Ground










