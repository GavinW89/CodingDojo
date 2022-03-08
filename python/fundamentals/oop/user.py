class User:
    def __init__(self, firstName, lastName, email, balance=5000):
        self.firstName = firstName
        self.lastName = lastName
        self.email = email
        self.balance = balance
    def make_withdrawal(self, withdraw):
        self.balance -= withdraw
        print(f'User: {self.firstName} has withdrawn {withdraw}')
        return self
    def make_deposit(self, deposit):
        self.balance += deposit
        print(f'User: {self.firstName} Deposited: {deposit}')
        return self
    def display_user_balance(self):
        print(f"User: {self.firstName} Balance: {self.balance}")
        return self
    def transfer_money(self, other_user, amount):
        self.balance -= amount
        other_user.balance += amount
        print(f'User: {self.firstName} Transfered: {amount} To: {other_user.firstName}')
        return self

gavin= User('Gavin', 'Woods', 'gavin.woods@gmail.com')
kevin = User('Kevin', 'Centeno', 'kevin.centeno@company.com', 5000)
matt = User('Matt', 'nothdurft', 'matt.northdurft@company.com', 10000)

gavin.make_deposit(600).make_deposit(1000).make_deposit(800).make_withdrawal(400).display_user_balance()
kevin.transfer_money(matt, 500).make_deposit(1000).make_deposit(300).display_user_balance()
matt.make_deposit(600).make_withdrawal(400).make_withdrawal(200).make_withdrawal(100).display_user_balance()