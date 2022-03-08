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
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @staticmethod
    def validate_user(user):
        is_valid = True
        if len(user['username']) < 3:
            flash('User name must be longer')
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

    @classmethod
    def save_user(cls,data):
        query = 'INSERT INTO users (username, email, password, created_at, updated_at) VALUES (%(username)s, %(email)s,%(password)s, NOW(), NOW());'
        results = connectToMySQL("ForumDB").query_db(query,data)
        return results

    @classmethod
    def get_by_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL("ForumDB").query_db(query, data)
        if len(results) < 1:
            return False
        return cls(results[0])
    @classmethod
    def get_by_email_notby_id(cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s AND id != %(id)s;"
        results = connectToMySQL("ForumDB").query_db(query, data)
        if len(results) < 1:
            return False
        return results
    @classmethod
    def get_by_username(cls, data):
        query = "SELECT * FROM users WHERE username = %(username)s;"
        results = connectToMySQL("ForumDB").query_db(query, data)
        if len(results) < 1:
            return False
        return cls(results[0])
    @classmethod
    def get_username_notby_id(cls,data):
        query = "SELECT * FROM users WHERE username = %(username)s AND id != %(id)s;"
        results = connectToMySQL("ForumDB").query_db(query, data)
        if len(results) < 1:
            return False
        return results
    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        results = connectToMySQL("ForumDB").query_db(query, data)
        return cls(results[0])
    @classmethod
    def edit_user(cls,data):
        query = 'UPDATE users SET username = %(username)s, email = %(email)s, password = %(password)s'
        results = connectToMySQL("ForumDB").query_db(query, data)
        return results