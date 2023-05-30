import abc
from abc import abstractmethod
from models.Actor import Actor


class IControllerActor(abc.ABC):
    def __init__(self, actor: Actor):
        pass

    @abstractmethod
    def update(self, delta_time):
        pass
