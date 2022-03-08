from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import register

import re
email_regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class NewUser:
        def __init__(self,data):
            self.fname = data['fname']
            self.lname = data['lname']
            self.email = data['email']

            self.password = data['newpassword']
            self.confirm = data['confirmpassword']

        @classmethod
        def validate_user(data):
            is_valid = True
            if len(data['fname']) < 2:
                flash("First name must be at least 2 characters.")
                is_valid = False
            if len(data['lname']) < 2:
                flash('Last name must be at least 2 characters.')
                is_valid = False
            if not email_regex.match(data['email']):
                flash('Please enter a valid email.')
                is_valid = False
            if data['password'] != data['confirmpassword']:
                flash('Your passwords do not match.')
                is_valid = False
            
