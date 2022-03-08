from flask_app import app
from flask import render_template, request, redirect, session, flash

from flask_app.models.user import User
from flask_app.models.post import Post
from flask_app.models.group import Group

@app.route('/')
def homepage():
    posts = Post.get_all_posts()
    return render_template('homepage.html', posts = posts)
