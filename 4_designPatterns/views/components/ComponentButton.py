from typing import List

import pygame
from pygame import Surface


class ComponentButton:

    def __init__(
            self,
            rect: pygame.Rect,
            text: str = None,
            is_transparent: bool = False,
            linked_item: object = None,
            linked_enum: object = None,
            is_visible: bool = True,
    ):
        self.is_visible = is_visible
        self.button_rect = rect
        self.button_text = text
        self.button_up = None
        self.button_over = None
        self.button_down = None
        self.is_transparent = is_transparent
        self.linked_item = linked_item
        self.linked_enum = linked_enum
        self.offset_x = 0
        self.offset_y = 0
        self.is_button_down = False
        self.is_button_over = False

        if not self.is_transparent:
            self.button_up = self.generate_button_surface(
                color_background=(255, 255, 255),
                color_font=(0, 0, 0)
            )
            self.button_over = self.generate_button_surface(
                color_background=(155, 155, 155),
                color_font=(0, 0, 0)
            )
            self.button_down = self.generate_button_surface(
                color_background=(0, 0, 0),
                color_font=(255, 255, 255)
            )
        else:
            self.button_up = pygame.Surface((rect.width, rect.height), pygame.SRCALPHA)
            self.button_over = self.generate_transparent_button_surface(
                color_background=(255, 255, 255, 155),
                color_border=(0, 0, 0, 155)
            )
            self.button_down = self.generate_transparent_button_surface(
                color_background=(150, 0, 0, 155),
                color_border=(0, 0, 0, 155)
            )

        self.listeners_click: List[callable] = []

    def generate_transparent_button_surface(self, color_background, color_border):
        surface = pygame.Surface((self.button_rect.width, self.button_rect.height), pygame.SRCALPHA)
        pygame.draw.circle(
            surface,
            color=color_background,
            center=(self.button_rect.width // 2, self.button_rect.height // 2),
            radius=self.button_rect.width // 2,
            width=0
        )
        pygame.draw.circle(
            surface,
            color=color_border,
            center=(self.button_rect.width // 2, self.button_rect.height // 2),
            radius=self.button_rect.width // 2,
            width=2
        )
        return surface

    def generate_button_surface(self, color_background, color_font):
        surface = pygame.Surface((self.button_rect.width, self.button_rect.height), pygame.SRCALPHA)
        pygame.draw.rect(
            surface,
            color=color_font,
            rect=pygame.Rect(0, 0, self.button_rect.width, self.button_rect.height)
        )
        pygame.draw.rect(
            surface,
            color=color_background,
            rect=pygame.Rect(2, 2, self.button_rect.width - 4, self.button_rect.height - 4)
        )
        if self.button_text:
            font = pygame.font.SysFont('arial', 24)
            img_font = font.render(self.button_text, True, color_font)
            surface.blit(img_font, (10, 5))
        return surface

    def draw(self, surface: pygame.Surface):
        if self.is_visible:
            button_surface = self.button_up
            if self.is_button_down:
                button_surface = self.button_down
            elif self.is_button_over:
                button_surface = self.button_over
            surface.blit(
                button_surface,
                (
                    self.button_rect.x + self.offset_x,
                    self.button_rect.y + self.offset_y
                )
            )

    def trigger_mouse(self, mouse_position, mouse_buttons) -> bool:
        is_clicked = False
        if self.is_visible:
            if self.button_rect.x + self.offset_x < mouse_position[0] < self.button_rect.x + self.offset_x + self.button_rect.width \
                    and self.button_rect.y + self.offset_y < mouse_position[1] < self.button_rect.y + self.offset_y + self.button_rect.height:
                        is_clicked = True
                        self.is_button_over = True
                        if mouse_buttons[0]:
                            self.is_button_down = True
                        elif self.is_button_down:
                            self.is_button_down = False
                            for listener in self.listeners_click:
                                listener(self)
            else:
                self.is_button_over = False
                self.is_button_down = False
        return is_clicked

    def add_listener_click(self, func_on_click):
        if func_on_click not in self.listeners_click:
            self.listeners_click.append(func_on_click)

    def remove_listener_click(self, func_on_click):
        if func_on_click in self.listeners_click:
            self.listeners_click.remove(func_on_click)
