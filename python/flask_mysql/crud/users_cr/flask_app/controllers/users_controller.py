from flask_app import app
from flask import render_template, request, redirect

# ===================================
# Import USER class from users_models
# ===================================
from flask_app.models.users_models import User

@app.route("/")
def index():
    users = User.all_users()
    return render_template("read(all).html", users = users)

@app.route("/newuser")
def newuser():
    return render_template("create.html")

@app.route("/create", methods=["POST"])
def create():
    data = {
        "first_name" : request.form["first_name"],
        "last_name" : request.form["last_name"],
        "email" : request.form["email"]
    }
    User.createuser(data)

    # user_id = User.createuser(data)
    return redirect("/")

@app.route("/DeleteUser/<int:user_id>")
def delete_user(user_id):
    data = {
        "id": user_id
    }
    User.delete_user(data)
    return redirect("/")

@app.route("/EditUser/<int:user_id>")
def edit_user(user_id):
    data = {
        "id": user_id
    }
    user = User.show(data)
    return render_template("update_user.html", user = user)

@app.route("/user_edited/<int:id>", methods = ["POST"])
def user_edited(id):
    data = {
        "first_name" : request.form["first_name"],
        "last_name" : request.form["last_name"],
        "email" : request.form["email"],
        "id" : id
    }
    User.user_edited(data)
    return redirect("/")


@app.route("/show/<int:user_id>")
def show(user_id):
    data = {
        "id": user_id
    }
    user = User.show(data)
    return render_template("show_user.html", user = user )
