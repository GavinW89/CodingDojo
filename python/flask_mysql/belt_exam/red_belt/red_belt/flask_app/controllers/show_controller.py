import email
from flask_app import app
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from flask import render_template, request, redirect, session, flash

from flask_app.models.user import User
from flask_app.models.show import Show

@app.route('/create')
def create():
    if 'user_id' not in session:
        flash('Please login or register')
        return redirect('/')
    user_id = session['user_id']
    return render_template('create_show.html', user_id = user_id)

@app.route('/createpost', methods = ["POST"])
def createpost():
    if 'user_id' not in session:
        flash('Please login or register')
        return redirect('/')
    if not Show.validate_show(request.form):
        return redirect('/create')
    data = {
        'user_id' : request.form['user_id'],
        'title' : request.form['title'],
        'network' : request.form['network'],
        'release_date' : request.form['release_date'],
        'description' : request.form['description'],
    }

    Show.save_show(data)

    return redirect('/dashboard')

@app.route('/view/<int:id>')
def view(id):
    if 'user_id' not in session:
        flash('Please login or register')
        return redirect('/')
    data = {
        'id' : id
    }
    show=Show.get_show_by_id(data)
    data = {
        'id' : show.user_id
    }
    user = User.get_by_id(data)
    return render_template('show.html', show = show, user = user)

@app.route('/edit/<int:id>')
def edit_show(id):
    if 'user_id' not in session:
        flash('Please login or register')
        return redirect('/')
    data = {
        'id' : id
    }
    return render_template('edit_show.html', show = Show.get_show_by_id(data))

@app.route('/editpost/<int:id>', methods = ['POST'])
def editpost(id):
    if 'user_id' not in session:
        flash('Please login or register')
        return redirect('/')
    if not Show.validate_show(request.form):
        return redirect(f'/edit/{id}')
    data = {
        'id': id,
        'user_id' : request.form['user_id'],
        'title' : request.form['title'],
        'network' : request.form['network'],
        'release_date' : request.form['release_date'],
        'description' : request.form['description'],
    }

    Show.update_show(data)

    return redirect('/dashboard')

@app.route('/delete/<int:id>')
def delete(id):
    data = {
        'id' : id
    }
    Show.delete_show(data)
    return redirect("/dashboard")

