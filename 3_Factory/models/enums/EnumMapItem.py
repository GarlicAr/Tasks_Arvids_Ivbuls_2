from enum import Enum

class EnumMapItem(str, Enum):
    NotSet = "NotSet"
    Fruit = "Fruit"
    Forrest = "Forrest"

    def __str__(self) -> str:
        return self.value