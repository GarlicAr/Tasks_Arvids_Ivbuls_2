from dataclasses import field
from dataclasses import dataclass
from models.Vector2D import Vector2D
from dataclasses_json import dataclass_json

from models.enums.EnumBuilding import EnumBuilding
from models.enums.EnumTribe import EnumTribe


@dataclass_json
@dataclass
class MapBuilding:
    is_hidden: bool
    position: Vector2D = field(default_factory=Vector2D)
    building_type: EnumBuilding = EnumBuilding.NotSet
    tribe: EnumTribe = EnumTribe.NotSet
    level = 1

    def __hash__(self):
        return id(self)

    def is_hidden(self):
        return (
                self.position.x < self.game.window_location.x or
                self.position.y < self.game.window_location.y or
                self.position.x >= self.game.window_location.x + self.game.window_size.x or
                self.position.y >= self.game.window_location.y + self.game.window_size.y
        )
