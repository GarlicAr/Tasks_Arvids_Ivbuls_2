from enum import Enum

class EnumBuilding(str, Enum):
    NotSet = "NotSet"
    City = "City"
    Sawmill = "Sawmill"

    def __str__(self) -> str:
        return self.value