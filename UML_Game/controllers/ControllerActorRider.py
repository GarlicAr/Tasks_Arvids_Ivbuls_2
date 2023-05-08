from controllers.ControllerActor import ControllerActor


class ControllerActorRider(ControllerActor):
    def __init__(self, actor):
        self.actor = actor
        super().__init__()



    def update(self, delta_time):
        self.actor.position+=1

    def execute_turn(self):
        step_size = 2
        pass