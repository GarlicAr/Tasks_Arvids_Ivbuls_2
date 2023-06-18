from enum import Enum

class EnumMapItemType(str, Enum):
    NotSet = "NotSet"
    Fruit = "Fruit"
    Forrest = "Forrest"
    Sawmill = "Sawmill"

    def __str__(self) -> str:
        return self.value