from flask_app import app
from flask import render_template, request, redirect, session

# ================================
# import the class from dojo
# ================================
from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja
# from flask_app.models.dojo import Dojo
@app.route("/")
def main():
    dojos = Dojo.all_dojo()
    return render_template("index.html", dojos = dojos)

@app.route("/newDojo", methods = ["POST"])
def newDojo():
    data = {
        "dojo_name" : request.form["dojoName"]
    }
    Dojo.addDojo(data)
    return redirect("/")

@app.route("/dojo/<int:dojo_id>")
def showDojo(dojo_id):
    data = {
        "id": dojo_id
    }
    dojo = Dojo.show_dojo_ninjas(data)
    return render_template("dojo.html", dojo = dojo)