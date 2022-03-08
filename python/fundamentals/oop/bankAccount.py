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

account1 = BankAccount(.01, 0)
account2 = BankAccount(.05, 6000)

account1.deposit(200).deposit(100).deposit(400).withdraw(700).yield_interest().display_account_info()
account2.deposit(1000).deposit(700).yield_interest().display_account_info()