import math
from dataclasses import field
from dataclasses import dataclass
from dataclasses_json import dataclass_json

@dataclass_json
@dataclass
class Vector2D:
    x: int = 0
    y: int = 0

    def copy(self):
        return Vector2D(self.x, self.y)

    def __add__(self, other):
        return Vector2D(self.x + other.x, self.y + other.y)

    def __sub__(self, other):
        return Vector2D(self.x - other.x, self.y - other.y)

    def __mul__(self, other):
        return Vector2D(self.x * other, self.y * other)

    def __truediv__(self, other):
        return Vector2D(self.x / other, self.y / other)

    def __str__(self):
        return f"({self.x}, {self.y})"

    def __repr__(self):
        return f"Vector2D({self.x}, {self.y})"

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

    def __ne__(self, other):
        return self.x != other.x or self.y != other.y

    def __lt__(self, other):
        return self.x < other.x and self.y < other.y

    def __le__(self, other):
        return self.x <= other.x and self.y <= other.y

    def __gt__(self, other):
        return self.x > other.x and self.y > other.y

    def __ge__(self, other):
        return self.x >= other.x and self.y >= other.y

    def __abs__(self):
        return Vector2D(abs(self.x), abs(self.y))

    def __neg__(self):
        return Vector2D(-self.x, -self.y)

    def __pos__(self):
        return Vector2D(+self.x, +self.y)

    def __round__(self, n=None):
        return Vector2D(round(self.x, n), round(self.y, n))

    def __floor__(self):
        return Vector2D(math.floor(self.x), math.floor(self.y))

    def __ceil__(self):
        return Vector2D(math.ceil(self.x), math.ceil(self.y))

    def __trunc__(self):
        return Vector2D(math.trunc(self.x), math.trunc(self.y))

    def __bool__(self):
        return self.x != 0 and self.y != 0
