from dataclasses import field
from dataclasses import dataclass
from models.Vector2D import Vector2D
from models.enums.EnumActorType import EnumActorType
from models.enums.EnumTribe import EnumTribeType
from dataclasses_json import dataclass_json

@dataclass_json
@dataclass
class Actor:
    position: Vector2D = field(default=Vector2D)
    actor_type: EnumActorType = EnumActorType.NotSet
    tribe: EnumTribeType = EnumTribeType.NotSet

    cost_stars: int = 0
    move_steps: int = 0
    power_attack: int = 0
    power_defense: int = 0
    experience: int = 0
    level: int = 0