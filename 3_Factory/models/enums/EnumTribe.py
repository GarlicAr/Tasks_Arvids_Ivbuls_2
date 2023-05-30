from enum import Enum

class EnumTribe(str, Enum):
    NotSet = "NotSet"
    Imperius = "Imperius"
    Hoodrick = "Hoodrick"

    def __str__(self) -> str:
        return self.value