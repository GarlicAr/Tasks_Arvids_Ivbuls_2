from controllers.ControllerActor import ControllerActor
from models.Actor import Actor
from models.enums import EnumActorType


class ControllerActorRider(ControllerActor):
    def __init__(self, actor):
        self.__actor: Actor = actor
        super().__init__()



    def update(self, delta_time):
        if self.actor.actor_type == EnumActorType.EnumActorType.Horseman:
            self.actor.position.x += 2
            self.actor.position.y += 2
            self.actor.move_steps += 2



    def execute_turn(self):
        step_size = 2
        pass