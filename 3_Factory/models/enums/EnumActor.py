from enum import Enum

class EnumActor(str, Enum):
    NotSet = "NotSet"
    Warrior = "Warrior"
    Rider = "Rider"
    Knight = "Knight"

    def __str__(self) -> str:
        return self.value