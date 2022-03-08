from flask_app import app
from flask import render_template, request, redirect, session, flash
from flask_app.models.group import Group
from flask_app.models.post import Post


@app.route('/groups')
def groups():
    if 'user_id' not in session:
        flash('Please login or register to view groups')
        return redirect('/')
    groups = Group.find_all_group()
    return render_template('groups.html', groups = groups)

@app.route('/creategroup')
def addgroup():
    if 'user_id' not in session:
        flash('Please login or register')
        return redirect('/')
    id = session['user_id']
    return render_template('createGroup.html', id = id)

@app.route('/creategrouppost', methods = ['POST'])
def savegroup():

    data = {
        'groupName' : request.form['groupName'].upper(),
        'description' : request.form['description']
    }
    Group.savegroup(data)
    return redirect('/groups')

@app.route('/viewgroup/<int:id>')
def viewgroup(id):
    data = {
        'group_id' : id
    }
    group = Group.find_group_id(data)
    posts = Post.get_post_by_group_id(data)
    return render_template('viewgroup.html', group = group, posts = posts)