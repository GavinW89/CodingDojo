from flask_app import app
from flask import render_template, request, redirect, session, flash
from flask_app.models.login import NewUser

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/register', methods = ['POST'])
def register():
    if not User.validate_user(request.form):
        return redirect('/')
    return redirect('/welcome')