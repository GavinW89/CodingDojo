class Ninja:
    def __init__(self, first_name, last_name, treats, pet_food, pet):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pet = pet
        print(f'{self.first_name}, welcome to the dojo.')
    def walk(self):
        self.pet.play()
    def feed(self):
        self.pet.eat()
    def bathe(self):
        self.pet.health += 2
        self.pet.noise()


class Pet:
    def __init__(self, name, type, tricks):
        self.name = name
        self.type = type
        self.tricks=tricks
        self.health = 100
        self.energy = 50
        print(f'{self.name}, you are {Ninja.first_name} pet.')
    def sleep(self):
        self.health += 10
        self.energy += 50
        print(f'{self.name} is now at Health: {self.health} Energy: {self.energy} ')
        return self
    def eat(self):
        self.health += 20
        self.energy += 10
        print(f'{self.name} is now at Health: {self.health} Energy: {self.energy} ')
        return self
    def play(self):
        self.health += 5
        self.energy -= 20
        print(f'{self.name} is now at Health: {self.health} Energy: {self.energy} ')
        return self
    def noise(self):
        self.energy += 5
        print(f'{self.name} jumps around and runs in excitement. Health: {self.health} Energy: {self.energy} ')

luna = Pet('Luna', 'Mini-Poodle','Begging')
gavin = Ninja('Gavin','Woods','Beef Jerky','Blue', luna)
mabel = Pet('Mabel', 'Mini-Poodle', 'Barking')
gabe = Ninja('Gabe', 'Woods', 'Scraps', 'Human Food', mabel)

