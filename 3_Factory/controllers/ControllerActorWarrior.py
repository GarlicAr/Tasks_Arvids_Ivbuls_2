from controllers.interfaces.IControllerActor import IControllerActor


class ControllerActorWarrior(IControllerActor):
    def __init__(self, actor):
        self.actor = actor
        super().__init__()

    def update(self, delta_time):
        # actually implement
        # self.actor.position += 1
        pass