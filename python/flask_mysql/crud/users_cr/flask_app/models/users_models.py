# ===================================
# Connect with connectToMySQL
# ===================================
from flask_app.config.mysqlconnection import connectToMySQL

# ===================================
# Class for Users
# ===================================
class User:
    def __init__(self, data):
        self.id = data["id"]

        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.email = data["email"]

        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @classmethod
    def all_users(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL("users_schema").query_db(query)
        # Parsing data
        allUsers = []
        for user in results:
            allUsers.append(cls(user))
        return allUsers

    @classmethod
    def createuser(cls, data):
        query = "INSERT INTO users (first_name, last_name, email,created_at,updated_at) VALUES ( %(first_name)s, %(last_name)s, %(email)s, NOW(), NOW() )"
        new_id = connectToMySQL("users_schema").query_db(query, data)
        return new_id
    
    @classmethod
    def delete_user(cls, data):
        query = "DELETE FROM users WHERE id = %(id)s"
        new_id = connectToMySQL("users_schema").query_db(query, data)
        return new_id

    @classmethod
    def edit_user(cls, data):
        query = "INSERT INTO users (first_name, last_name, email,created_at,updated_at) VALUES ( %(first_name)s, %(last_name)s, %(email)s, NOW(), NOW() )"
        new_id = connectToMySQL("users_schema").query_db(query, data)
        return new_id

    @classmethod
    def user_edited(cls, data):
        query = "UPDATE users SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s, updated_at = NOW() WHERE id = %(id)s"
        new_id = connectToMySQL("users_schema").query_db(query, data)
        return new_id

    @classmethod
    def show(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s"
        new_id = connectToMySQL("users_schema").query_db(query, data)
        return cls(new_id[0])