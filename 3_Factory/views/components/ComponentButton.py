from typing import List

import pygame

class ComponentButton:


    def __init__(self, rect: pygame.Rect, text: str):
        self.button_text = text
        self.is_mouse_over = None
        self.button_rect=rect
        self.button_up = pygame.Surface((rect.width, rect.height), pygame.SRCALPHA)
        self.button_hover = pygame.Surface((rect.width, rect.height), pygame.SRCALPHA)
        self.button_down = pygame.Surface((rect.width, rect.height), pygame.SRCALPHA)




        pygame.draw.rect(self.button_up,
                         color=(0,0,0),
                         rect=pygame.Rect(0,0,rect.width, rect.height)
                         )

        pygame.draw.rect(self.button_up,
                         color=(255, 255, 255),
                         rect=pygame.Rect(2, 2, rect.width-4, rect.height-4)
                         )

        pygame.draw.rect(self.button_hover, (200, 200, 200), pygame.Rect(2, 2, rect.width - 4, rect.height - 4))
        pygame.draw.rect(self.button_down, (150, 150, 150), pygame.Rect(2, 2, rect.width - 4, rect.height - 4))

        self.button_surface = self.button_up
        self.listeners_click = []



    def draw(self, surface: pygame.Surface):

        surface.blit(self.button_surface, (self.button_rect.x, self.button_rect.y))

        font = pygame.font.Font(None, 24)
        text = font.render(self.button_text, True, (0, 0, 0))
        text_rect = text.get_rect(center=self.button_rect.center)


        surface.blit(self.button_up, (self.button_rect.x, self.button_rect.y))

        surface.blit(
            self.button_up,
            (self.button_rect.x, self.button_rect.y)
        )

        surface.blit(self.button_surface, (self.button_rect.x, self.button_rect.y))
        surface.blit(text, text_rect)

    def trigger_mouse(self, mouse_position, mouse_buttons):

        is_mouse_over = self.button_rect.collidepoint(mouse_position)

        if is_mouse_over:
            if mouse_buttons[0]:
                self.button_surface = self.button_down
            else:
                self.button_surface = self.button_hover
        else:
            self.button_surface = self.button_up

        if is_mouse_over and mouse_buttons[0]:
            for listener in self.listeners_click:
                listener()


        if any(mouse_buttons):
            if self.button_rect.x < mouse_position[0] < self.button_rect.x + self.button_rect.width:
                if self.button_rect.y < mouse_position[1] < self.button_rect.y + self.button_rect.height:
                    for listener in self.listeners_click:
                        listener()



    def add_listener_click(self,func_on_click):
        if func_on_click not in self.listeners_click:
            self.listeners_click.append(func_on_click)

    def remove_listener_click(self, func_on_click):
        if func_on_click not in self.listeners_click:
            self.listeners_click.remove(func_on_click)


