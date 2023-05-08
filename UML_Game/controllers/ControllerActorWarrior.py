from controllers.ControllerActor import ControllerActor


class ControllerActorWarrior(ControllerActor):
    def __init__(self, actor):
        self.actor = actor
        super().__init__()



    def update(self, delta_time):
        self.actor.position+=1