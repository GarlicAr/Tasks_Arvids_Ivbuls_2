from dataclasses import field
from dataclasses import dataclass
from models.Vector2D import Vector2D
from dataclasses_json import dataclass_json
from models.enums.EnumMapItemType import EnumMapItemType

@dataclass_json
@dataclass
class MapItem:
    position: Vector2D = field(default=Vector2D)
    item_type: EnumMapItemType = EnumMapItemType.NotSet