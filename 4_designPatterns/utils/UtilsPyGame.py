from typing import Tuple

import pygame
from pygame import Surface


class UtilsPyGame:
    @staticmethod
    def load_image_and_resize(path: str, size: Tuple[int, int]) -> Surface:
        return pygame.transform.scale(pygame.image.load(path), size)