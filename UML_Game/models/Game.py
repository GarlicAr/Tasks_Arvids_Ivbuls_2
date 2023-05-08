from dataclasses import field
from dataclasses import dataclass
from typing import List

from dataclasses_json import dataclass_json

from models.Actor import Actor
from models.MapItem import MapItem
from models.MapTile import MapTile
from models.Vector2D import Vector2D
@dataclass_json
@dataclass
class Game:
    map_size: Vector2D = field(default_factory=Vector2D)

    window_size: Vector2D=field(default_factory=Vector2D)
    window_location: Vector2D=field(default_factory=Vector2D)

    map_tiles: List[List[MapTile]] = field(default_factory=list)
    map_items: List[MapItem] = field(default_factory=list)
    actors: List[Actor] = field(default_factory=list)

    turn: int=0
    stars: int =0


if __name__ =="__main__":
    game_dummy=Game()
    json_for_file = game_dummy.to_json(indent=4)
    print(json_for_file, game_dummy.turn)
    game_dummy.turn =2

    game_dummy = Game.from_json(json_for_file)

    print(game_dummy.turn)


