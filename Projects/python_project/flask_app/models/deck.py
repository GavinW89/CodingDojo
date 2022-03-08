import itertools
import random


vals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]
suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds']
deck = list(itertools.product(vals, suits))

for val, suit in deck:
    print('The %s of %s' % (val, suit))


class Deck: 
    def __init__(self,data):
        self.deck = deck
    
    def shuffle():
        random.shuffle(deck)
        print(deck)
        return deck

    def deal():
        hand = []
        for i in range(2):
            element_one = deck[i][0]
            element_two = deck[i][1]
            hand.append(str(element_one) + " " + element_two)
            # hand.append(element_two)
            print(hand)
            i += 1
        return hand
