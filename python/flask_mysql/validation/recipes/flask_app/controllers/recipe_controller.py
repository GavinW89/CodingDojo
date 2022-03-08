import email
from flask_app import app
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
from flask import render_template, request, redirect, session, flash

from flask_app.models.recipe import Recipe
from flask_app.models.user import User

@app.route('/create')
def create():
    if 'user_id' not in session:
        flash('Please login or register')
        return redirect('/')
    user_id = session['user_id']
    return render_template('create_recipe.html', user_id = user_id)

@app.route('/createpost', methods = ['POST'])
def createpost():
    if 'user_id' not in session:
        flash('Please login or register')
        return redirect('/')
    # print(request.form['under_thirty'])
    if not Recipe.validate_recipe(request.form):
        return redirect('/create')
    data = {
        'user_id' : request.form['user_id'],
        'name' : request.form['name'],
        'description' : request.form['description'],
        'instructions' : request.form['instructions'],
        'under_thirty' : request.form['under_thirty'],
        'made_on' : request.form['made_on']
    }

    Recipe.save(data)

    return redirect('/dashboard')

@app.route('/view/<int:id>')
def view(id):
    if 'user_id' not in session:
        flash('Please login or register')
        return redirect('/')
    data = {
        'id' : id
    }
    return render_template('recipe.html', recipe = Recipe.get_recipe_by_id(data))

@app.route('/edit/<int:id>')
def edit(id):
    if 'user_id' not in session:
        flash('Please login or register')
        return redirect('/')
    data = {
        'id' : id
    }
    return render_template('edit_recipe.html', recipe = Recipe.get_recipe_by_id(data))

@app.route('/editpost/<int:id>', methods = ['POST'])
def editpost(id):
    if 'user_id' not in session:
        flash('Please login or register')
        return redirect('/')
    # print(request.form['under_thirty'])
    if not Recipe.validate_recipe(request.form):
        return redirect(f'/edit/{id}')
    data = {
        'id' : id,
        'user_id' : request.form['user_id'],
        'name' : request.form['name'],
        'description' : request.form['description'],
        'instructions' : request.form['instructions'],
        'under_thirty' : request.form['under_thirty'],
    }

    Recipe.update(data)

    return redirect(f'/view/{id}')

@app.route('/delete/<int:id>')
def delete(id):
    data = {
        'id' : id
    }
    Recipe.delete(data)
    return redirect("/dashboard")
