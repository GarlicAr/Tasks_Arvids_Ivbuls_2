
import pygame
from loguru import logger

from models.enums.EnumActor import EnumActor
from models.enums.EnumBuilding import EnumBuilding
from views.resources.interfaces.IResourcesFactory import IResourcesFactory


class ResourcesFactoryHoodrick(IResourcesFactory):
    def create_building(self, enum_building: EnumBuilding, level: int) -> pygame.Surface:
        result = None

        try:
            if enum_building == EnumBuilding.City:
                result=pygame.image.load(f'resources/Tribes/Hoodrick/City/Hoodrick city {level}.png')
            elif enum_building == EnumBuilding.Sawmill:
                result=pygame.image.load(f'resources/Buildings/Sawmill/Sawmill level {level}.png')
        except Exception as exc:
            logger.exception(exc)

        return result

    def create_actor(self, enum_actor: EnumActor,position: pygame.Vector2) -> pygame.Surface:
        result = None

        try:
            if enum_actor == EnumActor.Knight:
                result = pygame.image.load('resources/Tribes/Hoodrick/Units/knight.png')
            elif enum_actor == EnumActor.Rider:
                result = pygame.image.load('resources/Tribes/Hoodrick/Units/rider.png')
        except Exception as exc:
            logger.exception(exc)

        return result
