import email
from flask_app import app
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from flask import render_template, request, redirect, session, flash

from flask_app.models.user import User

@app.route('/login')
def index():
    return render_template("login.html")

@app.route('/login', methods = ["POST"])
def login():
    if 'user_id' in session:
        flash('You are already logged in.')
        return redirect('/')
    data = {
        "username" : request.form["username"]
    }

    user_in_db = User.get_by_username(data)
    
    if not user_in_db:
        flash("Username and Password incorrect")
        return redirect("/login")
    if not bcrypt.check_password_hash(user_in_db.password, request.form["password"]):
        flash("Username and Password incorrect ")
        return redirect("/login")

    session['user_id'] = user_in_db.id
    return redirect('/')

@app.route("/register", methods = ['POST'])
def register():
    if 'user_id' in session:
        flash('You are already logged in')
        return redirect('/')
    if not User.validate_user(request.form):
        return redirect('/login')

    data = {
        'email' : request.form['email'],
        'username' : request.form['username']
    }

    if User.get_by_email(data):
        flash('An account with this email already exsist')
        return redirect("/login")

    if User.get_by_username(data):
        flash('An account with this username already exsist')
        return redirect("/login")

    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    data = {
        "username" : request.form['username'],
        "email" : request.form['email'],
        "password" : pw_hash
    }
    user_id = User.save_user(data)
    session['user_id'] = user_id
    return redirect("/")

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')

@app.route('/viewprofile')
def viewprofile():
    if 'user_id' not in session:
        flash('Please Log In')
        return redirect('/')
    data = {
        'id' : session['user_id']
    }
    profile = User.get_by_id(data)
    return render_template('viewprofile.html', profile = profile)

@app.route('/editprofile')
def editprofile():
    if 'user_id' not in session:
        flash('Please Log In')
        return redirect('/')
    data = {
        'id': session['user_id']
    }
    profile = User.get_by_id(data)
    return render_template('editprofile.html', profile = profile)

@app.route('/editprofilepost', methods = ['POST'])
def editprofilepost():
    if not User.validate_user(request.form):
        return redirect('/viewprofile')
    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    data ={
        'id': session['user_id'],
        'username': request.form['username'],
        'email': request.form['email'],
        'password': pw_hash,
        'confirm_password': request.form['confirm_password']
    }
    if User.get_username_notby_id(data):
        flash('An account with this username already exsist')
        return redirect("/editprofile")
    if User.get_by_email_notby_id(data):
        flash('An account with this email already exsist')
        return redirect("/editprofile")
    User.edit_user(data)
    return redirect('/viewprofile')