import random
import time
from typing import Dict

import pygame
from pygame import Surface, key, Rect

from controllers.ControllerGame import ControllerGame
from models.MapBuilding import MapBuilding
from models.enums.EnumActor import EnumActor
from models.enums.EnumBuilding import EnumBuilding
from models.enums.EnumMapTile import EnumMapTile
from models.enums.EnumTribe import EnumTribe
from views.components.ComponentButton import ComponentButton
from views.resources.ResourcesFactoryHoodrick import ResourcesFactoryHoodrick
from views.resources.ResourcesFactoryImperius import ResourcesFactoryImperius
from views.resources.interfaces.IResourcesFactory import IResourcesFactory

MAP_MOVEMENT_SPEED = 30

class WindowMain:
    def __init__(self):
        self.screen = pygame.display.set_mode(
            (500, 500)
        )
        self.is_game_running = True

        self.surfaces_by_map_tiles: Dict[EnumMapTile, Surface] = {
            EnumMapTile.Ground: pygame.image.load('./resources/Tribes/Imperius/Imperius ground.png'),
            EnumMapTile.Water: pygame.image.load('./resources/Miscellaneous/Shallow water.png')
        }

        self.surfaces_by_buildings: Dict[MapBuilding, Surface] = {}

        self.resource_factories_by_tribes: Dict[EnumTribe, IResourcesFactory]={
            EnumTribe.Imperius: ResourcesFactoryImperius(),
            EnumTribe.Hoodrick: ResourcesFactoryHoodrick()

        }

        # self.surface_dummy.set_colorkey((0, 0, 0)) # balck => transparent
        self.game = ControllerGame.new_game()


        self.ui_button_new_game = ComponentButton(
            Rect(5,5,200,40),
            'New Game'
        )

        self.ui_button_new_game.add_listener_click(self.on_click_new_game)

    def on_click_new_game(self):
        random.seed(time.time())
        self.game = ControllerGame.new_game()

    def show(self):
        # main game loop
        time_last = time.time()
        while self.is_game_running:
            self.screen.fill((0, 0, 0))

            # get delta seconds
            time_current = time.time()
            delta_sec = time_current - time_last
            time_last = time_current

            # update
            self.update(delta_sec)

            # draw
            self.draw()

            # update display
            pygame.display.flip()

            time.sleep(0.01)



    def update(self, delta_sec):

        mouse_position = pygame.mouse.get_pos()
        mouse_buttons = pygame.mouse.get_pressed()

        self.ui_button_new_game.trigger_mouse(mouse_position, mouse_buttons)

        building_unused = list(self.surfaces_by_buildings.keys())
        missing_buildings = list(self.game.buildings)

        for building in self.surfaces_by_buildings.keys():
            if building in self.game.buildings:
                missing_buildings.remove(building)
        for building in self.game.buildings:
            if building in building_unused:
                building_unused.remove(building)

        for new_building in missing_buildings:
            factory = self.resource_factories_by_tribes[new_building.tribe]
            self.surfaces_by_buildings[new_building] = factory.create_building(
                new_building.building_type,
                new_building.level
            )

        for building in building_unused:
            self.surfaces_by_buildings.pop(building)



        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                self.is_game_running = False
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_ESCAPE:
                    self.is_game_running = False



        keys_pressed = key.get_pressed()
        if keys_pressed[pygame.K_LEFT]:
            self.game.window_location.x -= MAP_MOVEMENT_SPEED * delta_sec
        if keys_pressed[pygame.K_RIGHT]:
            self.game.window_location.x += MAP_MOVEMENT_SPEED * delta_sec
        if keys_pressed[pygame.K_UP]:
            self.game.window_location.y -= MAP_MOVEMENT_SPEED * delta_sec
        if keys_pressed[pygame.K_DOWN]:
            self.game.window_location.y += MAP_MOVEMENT_SPEED * delta_sec

        self.game.window_location.x = max(0, self.game.window_location.x)
        self.game.window_location.x = min(self.game.map_size.x - self.game.window_size.x - 1,
                                          self.game.window_location.x)
        self.game.window_location.y = max(0, self.game.window_location.y)
        self.game.window_location.y = min(self.game.map_size.y - self.game.window_size.y - 1,
                                          self.game.window_location.y)


    def draw(self):
        view_x_start = int(self.game.window_location.x)
        view_x_end = view_x_start + self.game.window_size.x + 1
        view_y_start = int(self.game.window_location.y)
        view_y_end = view_y_start + self.game.window_size.y + 1

        self.ui_button_new_game.draw(self.screen)

        mouse_position = pygame.mouse.get_pos()
        self.ui_button_new_game.trigger_mouse(mouse_position, pygame.mouse.get_pressed())

        # show map edges
        view_i_offset = 0
        if view_x_start > 0:
            view_x_start -= 1
            view_i_offset -= 52
        if view_x_end < self.game.map_size.x:
            view_x_end += 1

        view_j_offset = 0
        if view_y_start > 0:
            view_y_start -= 1
            view_j_offset -= 15
        if view_y_end < self.game.map_size.y:
            view_y_end += 1



        for view_j, j in enumerate(range(view_y_start, view_y_end)):
            for view_i, i in enumerate(range(view_x_start, view_x_end)):
                map_tile = self.game.map_tiles[j][i]
                map_tile_type = map_tile.tile_type
                map_tile_surface = self.surfaces_by_map_tiles[map_tile_type]
                i_offset = 26 if j % 2 == 1 else 0
                self.screen.blit(map_tile_surface, (
                    view_i * 52 + i_offset + view_i_offset,
                    view_j * 15 + view_j_offset
                ))
            # TODO buildings



            for building, surface in self.surfaces_by_buildings.items():
                i = building.position.x - int(self.game.window_location.x)
                j = building.position.y - int(self.game.window_location.y)
                i_offset = 26 if building.position.y % 2 == 1 else 0

                self.screen.blit(surface, (
                    i * 52 + i_offset + view_i_offset,
                    j* 15 + view_j_offset
                ))

                if building.is_hidden:
                    city_position = (i * 52 + i_offset + view_i_offset, j * 15 + view_j_offset)
                    pygame.draw.circle(self.screen, (255, 0, 0), city_position, 10)

                    if city_position[0] <= mouse_position[0] <= city_position[0] + 10 and \
                            city_position[1] <= mouse_position[1] <= city_position[1] + 10:

                                factory = self.resource_factories_by_tribes[building.tribe]
                                warrior = factory.create_actor(EnumActor.Rider, building.position)
                                self.game.actors.append(warrior)

                                warrior_position = pygame.Vector2(city_position[0] + 20, city_position[1])
                                self.screen.blit(warrior, warrior_position)












        # TODO actors




        # TODO UI
        self.ui_button_new_game.draw(self.screen)
        if self.ui_button_new_game.is_mouse_over:
            self.ui_button_new_game.draw()

















