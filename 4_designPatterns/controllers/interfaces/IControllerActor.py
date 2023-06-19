import abc
from abc import abstractmethod
from models.Actor import Actor


class IControllerActor(abc.ABC):
    def __init__(self, actor: Actor):
        pass

    @abc.abstractproperty
    def actor(self) -> Actor:
        pass

    @abstractmethod
    def do_turn(self):
        pass

    @abstractmethod
    def update(self, delta_time):
        pass
