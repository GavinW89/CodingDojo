from flask_app import app
from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL

from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class User:
    def __init__(self,data):
        self.id = data['id']

        self.username = data['username']
        self.email = data['email']
        self.password = data['password']

        self.balance = 500

        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @classmethod
    def save_user(cls,data):
        query = 'INSERT INTO users (username, email, password, created_at, updated_at) VALUES (%(username)s,%(email)s,%(password)s, NOW(), NOW());'
        results = connectToMySQL("python_project_db").query_db(query,data)
        return results

    @classmethod
    def get_by_username(cls, data):
        query = "SELECT * FROM users WHERE username = %(username)s;"
        results = connectToMySQL("python_project_db").query_db(query, data)
        if len(results) < 1:
            return False
        return cls(results[0])

    @classmethod
    def get_by_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL("python_project_db").query_db(query, data)
        if len(results) < 1:
            return False
        return cls(results[0])

    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        results = connectToMySQL("python_project_db").query_db(query, data)
        return cls(results[0])

    @classmethod
    def get_balance(cls, data):
        query = "SELECT balance FROM users WHERE id = %(id)s"
        results = connectToMySQL("python_project_db").query_db(query, data)
        return results[0]

    @classmethod
    def minus_balance(cls,data):
        query = "UPDATE users SET balance = %(bet)s WHERE id = %(id)s"
        results = connectToMySQL("python_project_db").query_db(query, data)
        return results

    @classmethod
    def plus_balance(cls,data):
        query = "UPDATE users SET balance = %(earnings)s WHERE id = %(id)s"
        results = connectToMySQL("python_project_db").query_db(query, data)
        return results

    @staticmethod
    def validate_user(user):
        is_valid = True
        if len(user['username']) < 3:
            flash('User Name must be longer')
            is_valid = False
        if not EMAIL_REGEX.match(user['email']):
            flash('Please enter a valid email')
            is_valid = False
        if len(user['password']) < 8:
            flash('Password must be longer')
            is_valid = False
        if user['password'] != user['confirm_password']:
            flash('Your passwords dont match')
            is_valid = False
        return is_valid

    @staticmethod
    def validate_bet(bet, data):
        is_valid = True
        balance = User.get_balance(data)
        if bet['bet'] > balance:
            flash('You cannot bet more than you have')
            is_valid = False
        if bet['bet'] < 5:
            flash('Minnum bet is 5')
            is_valid = False
        return is_valid