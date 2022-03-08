from flask_app import app
from flask import render_template, request, redirect, session, flash
from flask_app.models.group import Group
from flask_app.models.post import Post
from flask_app.models.user import User

@app.route('/createpostform/<int:id>')
def createpost(id):
    data ={
        'group_id': id
    }
    group_id = data['group_id']
    return render_template('createpost.html', group_id = group_id)

@app.route('/savepost', methods = ['POST'])
def savepost():
    
    data = {
        'user_id': session['user_id'],
        'group_id': request.form['group_id'],
        'title': request.form['title'],
        'post': request.form['post']
    }
    group_id = data['group_id']
    post = Post.viewpost(data)
    newData = {
        'post_id': post['id']
    }
    post_id = newData['post_id']
    Post.savepost(data)
    return redirect(f'/viewpost/{post_id}')

@app.route('/viewpost/<int:id>')
def viewpost(id):
    data = {
        'id': session['user_id'],
        'post_id': id
    }
    post = Post.viewpost(data)
    user = User.get_by_id(data)
    return render_template('viewpost.html', user = user, post = post)
