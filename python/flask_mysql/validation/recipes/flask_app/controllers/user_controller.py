import email
from flask_app import app
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from flask import render_template, request, redirect, session, flash

from flask_app.models.user import User
from flask_app.models.recipe import Recipe

#landing page for Login and Reg
@app.route("/")
def log_reg():
    return render_template("login.html")

#====================
#get all of a relationship
#====================
#if "user_id" not in session:
        # data = {
        #     'id' : session['user_id']
        # }
        # user= User.get_by_email(data)



#processing Registration
@app.route("/register", methods = ['POST'])
def register():
    print("line 27")
    if not User.validate_user(request.form):
        return redirect('/')
    # Check to see if EMAIL is in DB!!
    data = {

        'email' : request.form['email']

    }
    if User.get_by_email(data):
        flash('An account with this email already exsist')
        return redirect("/")
    print("line 34")
    #Hash password
    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    print("line 37")
    data = {
        "first_name" : request.form['fname'],
        "last_name" : request.form['lname'],
        "email" : request.form['email'],
        "password" : pw_hash
    }
    print("line 44")
    user_id = User.save(data)
    # user_id = User.get_by_email(data)
    print("line 47")
    session['user_id'] = user_id
    print("line 49")
    return redirect("/dashboard")

#Processing Login
@app.route('/login', methods = ["POST"])
def login():
    #check to see if User is in DB (by email)
    data = {
        "email" : request.form["email"]
    }
    #grab the user based on email
    user_in_db = User.get_by_email(data)
    if not user_in_db:
        flash("Email and Password incorrect")
        return redirect("/")
    if not bcrypt.check_password_hash(user_in_db.password, request.form["password"]):
        flash("Email and Password incorrect ")
        return redirect("/")

    session['user_id'] = user_in_db.id
    return redirect('/dashboard')

#Post Processing
@app.route('/dashboard')
def dashboard_route():
    if 'user_id' not in session:
        flash('Please login or register')
        return redirect('/')
    data = {
        'id': session['user_id']
    }
    user = User.get_by_id(data)
    user_recipes = Recipe.get_by_user_id(data)
    recipes = Recipe.get_all(data)
    return render_template('home.html', user = user, user_recipes = user_recipes, recipes = recipes)
@app.route('/logout')
def logoute():
    session.clear()
    return redirect('/')