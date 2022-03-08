from flask_app import app
from flask import render_template, request, redirect, session, flash

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/post', methods=['POST'])
def post():
    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['favLang'] = request.form['favLang']
    session['comment'] = request.form['comment']
    return redirect('/second')

@app.route('/second')
def second():
    return render_template('post.html', name = session['name'], location=session['location'], lang=session['favLang'], comment=session['comment'])