import time

import pygame

from controllers.ControllerGame import ControllerGame
from models.enums import EnumMapTileType
from controllers.ControllerActorWarrior import ControllerActorWarrior


class WindowMain:
    def __init__(self):
        self.screen = pygame.display.set_mode(
            (520, 500)
        )
        self.is_game_running = True

        self.surface_dummy = pygame.image.load(
            "./resources/Tribes/Imperius/Imperius ground.png"
        )

        self.surface_dummy_water = pygame.image.load(
            "./resources/Tribes/Aquarion/Aquarion ground.png"
        )

        self.surface_actor = pygame.image.load(
            "./resources/Tribes/Imperius/Imperius game.png"
        )

        self.warrior = pygame.image.load(
            "./resources/Tribes/Imperius/Units/warrior.png"
        )

        self.rider = pygame.image.load(
            "./resources/Tribes/Imperius/Units/rider.png")



        self.surface_dummy.set_colorkey((0,0,0)) #black to transparent

        self.game=ControllerGame.new_game()

        self.pos_x = 52
        self.pos_y = 15







    def show(self):
        # main game loop
        time_last = pygame.time.get_ticks()
        while self.is_game_running:
            # get delta seconds
            time_current = pygame.time.get_ticks()
            delta_milisec = time_current - time_last
            time_last = time_current

            # update
            self.update(delta_milisec)

            # draw
            self.draw()

            # update display
            pygame.display.flip()
            time.sleep(0.01)

    def update(self, delta_milisec):
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                self.is_game_running = False
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_ESCAPE:
                    self.is_game_running= False
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_RIGHT:
                    self.pos_x+=15
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_DOWN:
                    self.pos_y+=15
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_UP:
                    self.pos_y-=15
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_LEFT:
                    self.pos_x-=15
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_SPACE:
                    self.pos_x*ControllerActorWarrior.execute_turn(self)
                    self.pos_y*ControllerActorWarrior.execute_turn(self)



    def draw(self):
            #Water
        for i in range(self.game.map_size.x):
            for j in range(self.game.map_size.y):
                if self.game.map_tiles[i][j].tile_type == EnumMapTileType.EnumMapTileType.Water:
                    if i % 2 == 0:
                        offset = 26
                    else:
                        offset = 0
                    self.screen.blit(
                        self.surface_dummy_water,
                        dest=((j * 52)+offset , (i * 15)))


                    #Ground
                if self.game.map_tiles[i][j].tile_type == EnumMapTileType.EnumMapTileType.Ground:
                    if i % 2 == 0:
                        offset = 26
                    else:
                        offset = 0
                    self.screen.blit(
                        self.surface_dummy,
                        dest=((j * 52) + offset, (i * 15)))



        self.screen.blit(self.warrior, dest=(self.pos_x-40, self.pos_y))
        self.screen.blit(self.rider, dest=(self.pos_x, self.pos_y))


































