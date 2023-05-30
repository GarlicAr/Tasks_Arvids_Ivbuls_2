import os.path
import random

from controllers.ControllerMap import ControllerMap
from models.Actor import Actor
from models.Game import Game
from models.MapTile import MapTile
from models.Vector2D import Vector2D
from models.enums.EnumActor import EnumActor
from models.enums.EnumMapTile import EnumMapTile


class ControllerGame:

    @staticmethod
    def new_game():
        game = Game()
        game.window_size.x = 8
        game.window_size.y = 32

        ControllerMap.generate_map(game)
        ControllerMap.generate_initial_buildings(game)

        return game
