import math
import random

from loguru import logger

from models.Game import Game
from models.MapBuilding import MapBuilding
from models.MapTile import MapTile
from models.Vector2D import Vector2D
from models.enums.EnumBuilding import EnumBuilding
from models.enums.EnumMapTile import EnumMapTile
from models.enums.EnumTribe import EnumTribe


class ControllerMap:

    @staticmethod
    def generate_map(game: Game):
        is_success = False
        try:
            game.map_size.x = 50
            game.map_size.y = 50

            last_water_positions = []

            for j in range(game.map_size.y):

                game.map_tiles.append([])  # add col to each row

                for i in range(game.map_size.x):
                    map_tile = MapTile()

                    likelihood_of_ground = 50
                    for last_water_position in last_water_positions:
                        delta = abs(i - last_water_position[0]) + abs(j - last_water_position[1])
                        if delta == 1:
                            likelihood_of_ground = 1
                            break

                    choices = likelihood_of_ground * [
                        EnumMapTile.Ground
                    ] + [
                        EnumMapTile.Water
                    ]

                    random_tile_type = random.choice(choices)
                    if random_tile_type == EnumMapTile.Water:
                        last_water_positions.append([i, j])

                    map_tile.position.x = i
                    map_tile.position.y = j
                    map_tile.tile_type = random_tile_type
                    game.map_tiles[j].append(map_tile)

            is_success = True
        except Exception as e:
            logger.exception(e)
        return is_success


    @staticmethod
    def get_all_map_tiles_by_type(game: Game, map_tile_type: EnumMapTile):
        map_tiles = []
        try:
            for j in range(game.map_size.y):
                for i in range(game.map_size.x):
                    map_tile = game.map_tiles[j][i]
                    if map_tile.tile_type == map_tile_type:
                        map_tiles.append(map_tile)
        except Exception as e:
            logger.exception(e)
        return map_tiles

    @staticmethod
    def generate_initial_buildings(game: Game):
        is_success = False
        try:
            ground_map_tiles = ControllerMap.get_all_map_tiles_by_type(game, EnumMapTile.Ground)
            # left side of the map tiles
            ground_map_tiles_left = []
            ground_map_tiles_right = []
            for ground_map_tile in ground_map_tiles:
                if ground_map_tile.position.x < game.map_size.x / 2:
                    ground_map_tiles_left.append(ground_map_tile)
                else:
                    ground_map_tiles_right.append(ground_map_tile)

            # add 2 initial cities
            map_tile_target = random.choice(ground_map_tiles_left)
            city = MapBuilding()
            city.position = map_tile_target.position.copy()

            city.building_type = EnumBuilding.City
            city.tribe = EnumTribe.Imperius
            game.buildings.append(city)

            game.window_location.x = city.position.x - math.floor(game.window_size.x / 2)
            game.window_location.y = city.position.y - math.floor(game.window_size.y / 2)

            map_tile_target = random.choice(ground_map_tiles_right)
            city = MapBuilding()
            city.position = map_tile_target.position.copy()
            city.building_type = EnumBuilding.City
            city.tribe = EnumTribe.Hoodrick
            game.buildings.append(city)

            is_success = True
        except Exception as e:
            logger.exception(e)
        return is_success