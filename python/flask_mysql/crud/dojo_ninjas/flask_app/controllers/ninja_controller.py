from flask_app import app
from flask import render_template, request, redirect

# ================================
# import the class from ninja
# ================================
from flask_app.models.ninja import Ninja
from flask_app.models.dojo import Dojo

@app.route("/newNinja")
def newninja():
    dojos = Dojo.all_dojo()
    return render_template("new_ninja.html", dojos = dojos)

@app.route("/createNinja", methods = ["POST"])
def createNinja():
    data = {
        "ninja_fname": request.form["ninja_fname"],
        "ninja_lname": request.form["ninja_lname"],
        "age": request.form["age"],
        "dojo_id": request.form["dojo_id"]
    }
    Ninja.create_ninja(data)
    id = data["dojo_id"]
    return redirect(f"/dojo/{id}")
