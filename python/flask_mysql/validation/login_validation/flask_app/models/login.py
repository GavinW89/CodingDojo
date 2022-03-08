from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import register

class Login:
    def __init__(self,data):
        self.fname = data['fname']
        self.lname = data['lname']
        self.email = data['email']

        self.passwoord = data['newpassword']

    @staticmethod
    def validate_register