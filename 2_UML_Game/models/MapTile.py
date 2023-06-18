from dataclasses import field
from dataclasses import dataclass
from models.Vector2D import Vector2D
from models.enums.EnumMapTileType import EnumMapTileType
from dataclasses_json import dataclass_json

@dataclass_json
@dataclass
class MapTile:
    position: Vector2D = field(default=Vector2D)
    tile_type: EnumMapTileType = EnumMapTileType.NotSet
