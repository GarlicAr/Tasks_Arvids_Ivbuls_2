from abc import abstractmethod, ABC
import pygame

from models.enums.EnumActor import EnumActor
from models.enums.EnumBuilding import EnumBuilding


class IResourcesFactory(ABC):

    @abstractmethod
    def create_building(self, enum_building: EnumBuilding, level: int)->pygame.Surface:
        pass

    @abstractmethod
    def create_actor(self,enum_actor:EnumActor)->pygame.Surface:
        pass
