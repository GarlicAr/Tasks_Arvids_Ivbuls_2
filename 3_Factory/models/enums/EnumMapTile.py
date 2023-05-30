from enum import Enum

class EnumMapTile(str, Enum):
    NotSet = "NotSet"
    Ground = "Ground"
    Water = "Water"
    Mountain = "Mountain"

    def __str__(self) -> str:
        return self.value