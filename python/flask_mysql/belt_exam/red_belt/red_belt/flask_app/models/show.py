from flask_app import app
from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL

class Show:
    def __init__(self,data):
        self.id = data['id']
        self.user_id = data['user_id']
        self.title = data['title']
        self.network = data['network']
        self.release_date = data['release_date']
        self.description = data['description']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @staticmethod
    def validate_show(show):
        is_valid = True
        if len(show['title']) < 3:
            flash('Title must be longer!!')
            is_valid = False
        if len(show['network']) < 3:
            flash('Newtwork must be longer!!')
            is_valid = False
        if len(show['description']) < 3:
            flash('Description must be longer!!')
            is_valid = False
        if not show['release_date']:
            flash('Please put in a date')
        return is_valid

    @classmethod
    def save_show(cls,data):
        query = 'INSERT INTO shows (user_id, title, network, release_date, description, created_at, updated_at) VALUES (%(user_id)s, %(title)s, %(network)s, %(release_date)s, %(description)s,NOW(), NOW());'
        results = connectToMySQL("redbeltdb").query_db(query,data)
        return results

    @classmethod
    def delete_show(cls,data):
        query = 'DELETE FROM shows WHERE shows.id = %(id)s;'
        results = connectToMySQL("redbeltdb").query_db(query,data)
        return results

    @classmethod
    def update_show(cls,data):
        query = 'UPDATE shows SET title = %(title)s, network = %(network)s, release_date = %(release_date)s, description = %(description)s WHERE shows.id = %(id)s;'
        results = connectToMySQL("redbeltdb").query_db(query,data)
        return results


    @classmethod
    def get_all(cls,data):
        query = "SELECT * FROM shows;"
        results = connectToMySQL("redbeltdb").query_db(query,data)
        all_shows = []
        for row in results:
            all_shows.append(cls(row))
        return all_shows

    @classmethod
    def get_show_by_id(cls,data):
        query = "SELECT * FROM shows WHERE shows.id = %(id)s;"
        results = connectToMySQL("redbeltdb").query_db(query, data)
        return cls(results[0])
