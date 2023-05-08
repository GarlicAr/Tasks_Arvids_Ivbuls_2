from enum import Enum

class EnumActorType(str, Enum):
    NotSet = "NotSet"
    Warrior = "Warrior"
    Horseman = "Horseman"
    Knight = "Knight"

    def __str__(self) -> str:
        return self.value