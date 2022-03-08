class BankAccount:
    def __init__(self, int_rate=.01, balance=0): 
        self.int_rate = int_rate
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        print(f'Deposited: {amount} New Balance: {self.balance}')
        return self
    def withdraw(self, amount):
        self.balance -= amount
        print(f'Withdrew: {amount} New Balance: {self.balance}')
        return self
    def display_account_info(self):
        print(f'Balance: {self.balance}')
        return self
    def yield_interest(self):
        x = 0
        if(self.balance > 0):
            x=self.balance * self.int_rate 
            self.balance += x
            print(f'New Balance With Yeild Interest: {self.balance}')
        return self

class User:
    def __init__(self, firstName, lastName, email):
        self.firstName = firstName
        self.lastName = lastName
        self.email = email
        self.account = BankAccount(.02,0)

kevin = User('Kevin', 'DaHomie', 'Homie@homiechat.com')
gavin = User('Gavin', 'Woods', 'gavin@gmail.com')
gavin.account.deposit(200)
kevin.account.deposit(400).withdraw(100).yield_interest().display_account_info()



