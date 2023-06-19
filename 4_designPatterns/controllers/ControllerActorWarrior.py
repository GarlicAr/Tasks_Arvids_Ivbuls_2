import random

from controllers.interfaces.IControllerActor import IControllerActor
from models.Actor import Actor


class ControllerActorWarrior(IControllerActor):
    def __init__(self, actor):
        super().__init__(actor)
        self._actor = actor
        self.speed = 0.5
        self.is_moving = False

    @property
    def actor(self) -> Actor:
        return self._actor

    def do_turn(self):
        self.is_moving = True
        self.actor.position_target.x = self.actor.position.x + random.randint(-3, 3)
        self.actor.position_target.y = self.actor.position.y + random.randint(-3, 3)

    def update(self, delta_time):
        if self.is_moving:
            self.actor.position.x += (1 if (self.actor.position_target.x - self.actor.position.x) > 0 else -1) * delta_time * self.speed
            self.actor.position.y += (1 if (self.actor.position_target.y - self.actor.position.y) > 0 else -1)  * delta_time * self.speed
            if int(self.actor.position.x) == int(self.actor.position_target.x) and int(self.actor.position.y) == int(self.actor.position_target.y):
                self.is_moving = False