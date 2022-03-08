from flask_app import app
from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL

class Group:
    def __init__(self,data):
        self.id = data['id']

        self.groupName = data['groupName']
        self.description = data['description']

        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def savegroup(cls,data):
        query = 'INSERT INTO groups1 (groupName, description, created_at, updated_at) VALUES (%(groupName)s, %(description)s, NOW(), NOW());'
        results = connectToMySQL("ForumDB").query_db(query,data)
        return results

    @classmethod
    def find_all_group(cls):
        query = 'SELECT * FROM groups1;'
        results = connectToMySQL("ForumDB").query_db(query)
        return results

    @classmethod
    def find_group_id(cls,data):
        query = 'SELECT * FROM groups1 WHERE id = %(group_id)s;'
        results = connectToMySQL("ForumDB").query_db(query,data)
        return results[0]