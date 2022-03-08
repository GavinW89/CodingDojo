import email
from flask_app import app
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from flask import render_template, request, redirect, session, flash

from flask_app.models.user import User
from flask_app.models.show import Show

@app.route('/')
def index():
    return render_template("login.html")

@app.route('/login', methods = ["POST"])
def login():

    data = {
        "email" : request.form["email"]
    }

    user_in_db = User.get_by_email(data)
    
    if not user_in_db:
        flash("Email and Password incorrect")
        return redirect("/")
    if not bcrypt.check_password_hash(user_in_db.password, request.form["password"]):
        flash("Email and Password incorrect ")
        return redirect("/")

    session['user_id'] = user_in_db.id
    return redirect('/dashboard')

@app.route("/register", methods = ['POST'])
def register():

    if not User.validate_user(request.form):
        return redirect('/')

    data = {
        'email' : request.form['email']
    }

    if User.get_by_email(data):
        flash('An account with this email already exsist')
        return redirect("/")

    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    data = {
        "first_name" : request.form['fname'],
        "last_name" : request.form['lname'],
        "email" : request.form['email'],
        "password" : pw_hash
    }
    user_id = User.save_user(data)
    session['user_id'] = user_id
    return redirect("/dashboard")

@app.route('/dashboard')
def dashboard():
    if 'user_id' not in session:
        flash('Please login or register')
        return redirect('/')
    data = {
        'id': session['user_id']
    }
    user = User.get_by_id(data)
    shows = Show.get_all(data)
    return render_template('dashboard.html', user = user, shows = shows)

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')