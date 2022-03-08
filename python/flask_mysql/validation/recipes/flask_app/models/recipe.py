from asyncio.windows_events import NULL
from flask_app import app
from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL

from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)


import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class Recipe:
    def __init__(self,data):
        self.id = data['id']
        self.user_id = data['user_id']
        self.name = data['name']
        self.description = data['description']
        self.instructions = data['instructions']
        self.under_thirty = data['under_thirty']
        self.made_on = data['made_on']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @staticmethod
    def validate_recipe(recipe):
        is_valid = True
        if len(recipe['name']) < 2:
            flash('Name must be longer!!')
            is_valid = False
        if len(recipe['description']) < 2:
            flash('Description must be longer!!')
            is_valid = False
        if len(recipe['instructions']) < 2:
            flash('Instructions must be longer!!')
            is_valid = False
        if not recipe['made_on']:
            flash('Please put in a date')
        if 'under_thirty' not in recipe:
            flash('Please select yes or no')
            is_valid = False
        return is_valid

    @classmethod
    def save(cls,data):
        query = 'INSERT INTO recipes (user_id, name, description, instructions, under_thirty, made_on, created_at, updated_at) VALUES (%(user_id)s, %(name)s,%(description)s,%(instructions)s,%(under_thirty)s, %(made_on)s,NOW(), NOW());'
        results = connectToMySQL("recipesdb").query_db(query,data)
        return results

    @classmethod
    def delete(cls,data):
        query = 'DELETE FROM recipes WHERE recipes.id = %(id)s;'
        results = connectToMySQL("recipesdb").query_db(query,data)
        return results

    @classmethod
    def update(cls,data):
        query = 'UPDATE recipes SET name = %(name)s, description = %(description)s, instructions = %(instructions)s, under_thirty = %(under_thirty)s WHERE recipes.id = %(id)s ;'
        results = connectToMySQL("recipesdb").query_db(query,data)
        return results

    @classmethod
    def get_by_user_id(cls, data):
        query = "SELECT * FROM recipes WHERE recipes.user_id = %(id)s;"
        results = connectToMySQL("recipesdb").query_db(query, data)
        recipes = []
        for row in results:
            recipes.append(cls(row))
        return recipes

    @classmethod
    def get_all(cls,data):
        query = "SELECT * FROM recipes WHERE user_id != %(id)s;"
        results = connectToMySQL("recipesdb").query_db(query, data)
        all_recipes = []
        for row in results:
            all_recipes.append(cls(row))
        return all_recipes

    @classmethod
    def get_recipe_by_id(cls,data):
        query = "SELECT * FROM recipes WHERE recipes.id = %(id)s;"
        results = connectToMySQL("recipesdb").query_db(query, data)
        return cls(results[0])