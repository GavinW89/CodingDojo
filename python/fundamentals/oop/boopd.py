from subprocess import ABOVE_NORMAL_PRIORITY_CLASS
from unicodedata import name


class SuperHero:
    
    def __init__(self, name, ability, suit, health= 100, attack_power = 3):
        self.name = name
        self.ability = ability
        self.suit = suit
        self.health = health
        self.attack_power= attack_power

    def intro(self):
        print(f'Hi, my name is {self.name}, my supser power is {self.ability}, iI like wearing {self.suit}')
        return self
    def fight(self):
        print( f'{self.name} is using {self .ability} to fight!!')
    

super_hero1 = SuperHero('Jim', 'Make Slim Jims', 'Overalls')