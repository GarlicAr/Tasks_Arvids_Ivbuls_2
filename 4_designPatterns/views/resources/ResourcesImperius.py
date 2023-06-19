from typing import Dict

import pygame
from pygame import Surface

from models.enums.EnumActor import EnumActor
from models.enums.EnumBuilding import EnumBuilding
from models.enums.EnumTribe import EnumTribe
from utils.UtilsPyGame import UtilsPyGame
from views.resources.interfaces.IResourceFactory import IResourceFactory


class ResourcesImperius(IResourceFactory):

    def __init__(self):
        super().__init__()

        self.surfaces_by_buildings_level_1: Dict[EnumBuilding, Surface] = {
            EnumBuilding.City: pygame.image.load('./resources/Tribes/Imperius/City/Imperius city 1.png'),
            EnumBuilding.Sawmill: pygame.image.load('./resources/Buildings/Sawmill/Sawmill level 1.png'),
        }

        self.surfaces_by_actor: Dict[EnumActor, Surface] = {
            EnumActor.Warrior: UtilsPyGame.load_image_and_resize('./resources/Tribes/Imperius/Units/warrior.png', (64, 64)),
            EnumActor.Rider: UtilsPyGame.load_image_and_resize('./resources/Tribes/Imperius/Units/rider.png', (64, 64)),
            EnumActor.Knight: UtilsPyGame.load_image_and_resize('./resources/Tribes/Imperius/Units/knight.png', (64, 64)),
        }

    def get_tribe(self) -> EnumTribe:
        return EnumTribe.Imperius

    def get_building(self, enum_building: EnumBuilding, level: int) -> Surface:
        if level == 1:
            return self.surfaces_by_buildings_level_1[enum_building]
        else:
            raise NotImplementedError()

    def get_actor(self, enum_actor: EnumActor) -> Surface:
        return self.surfaces_by_actor[enum_actor]