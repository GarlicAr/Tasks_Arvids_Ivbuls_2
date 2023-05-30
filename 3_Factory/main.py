import random
import pygame


from views.WindowMain import WindowMain

pygame.init()
pygame.font.init()

random.seed(1)
windowMain = WindowMain()
windowMain.show()