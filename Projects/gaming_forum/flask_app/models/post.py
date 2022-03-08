from flask_app import app
from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL

class Post:
    def __init__(self,data):
        self.post = data['post']
        self.user_id = data['user_id']
        self.group_id = data['group_id']
    @classmethod
    def validate_post(cls,post):
        if post['post'] <= 15:
            flash('Your post must be longer.')
            is_valid = False
        return is_valid
    @classmethod
    def savepost(cls,data):
        query = 'INSERT INTO posts (title, post, user_id, group_id,created_at, updated_at) VALUES (%(title)s, %(post)s, %(user_id)s,%(group_id)s, NOW(), NOW());'
        results = connectToMySQL("ForumDB").query_db(query,data)
        return results
    @classmethod
    def get_all_posts(cls):
        query = 'SELECT * FROM posts ORDER BY id DESC;'
        results = connectToMySQL("ForumDB").query_db(query)
        all_posts = []
        for row in results:
            all_posts.append(cls(row))
        return all_posts
    @classmethod
    def get_post_by_user_id(cls,data):
        query = 'SELECT * FROM posts WHERE user_id = %(user_id)s;'
        results = connectToMySQL("ForumDB").query_db(query,data)
        return results
    @classmethod
    def get_post_by_group_id(cls,data):
        query = 'SELECT * FROM posts WHERE group_id = %(group_id)s;'
        results = connectToMySQL("ForumDB").query_db(query,data)
        return results
    @classmethod
    def viewpost(cls,data):
        query = 'SELECT * FROM posts WHERE id = %(post_id)s;'
        results = connectToMySQL("ForumDB").query_db(query,data)
        return results[0]