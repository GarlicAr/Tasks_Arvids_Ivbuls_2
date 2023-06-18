import abc
from abc import abstractmethod
from models.Actor import Actor


class ControllerActor(abc.ABC):
    def __init__(self):
        self.actor: Actor = None

    @abstractmethod
    def update(self, delta_time):
        pass

    def execute_turn(self):
        pass