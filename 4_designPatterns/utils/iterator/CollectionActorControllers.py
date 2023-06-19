from collections import OrderedDict
from typing import List
from controllers.interfaces.IControllerActor import IControllerActor

class CollectionActorControllers:
    def __init__(
            self,
            actor_controllers: List[IControllerActor],
    ):
        super().__init__()
        pass

    def __len__(self):
        return 0

    def __iter__(self):
        pass
        return self

    def __next__(self):
        return None