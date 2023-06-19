import abc
from abc import abstractmethod

from pygame import Surface

from models.enums.EnumActor import EnumActor
from models.enums.EnumBuilding import EnumBuilding
from models.enums.EnumTribe import EnumTribe


class IResourceFactory(abc.ABC):
    def __init__(self):
        pass

    @abstractmethod
    def get_tribe(self) -> EnumTribe:
        pass

    @abstractmethod
    def get_building(self, enum_building: EnumBuilding, level: int) -> Surface:
        pass

    @abstractmethod
    def get_actor(self, enum_actor: EnumActor) -> Surface:
        pass
