from flask_app import app
from flask import render_template, request, redirect, session, flash
from flask_app.models.user import User
from flask_app.models.deck import Deck

@app.route('/play')
def play():
    if 'user_id' not in session:
        flash('Please login or register')
        return redirect('/')
    data = {
        'id' : session['user_id']
    }
    Deck.shuffle()
    hand = Deck.deal()
    balance = User.get_balance(data)
    return render_template("blackjack.html", hand = hand, balance = balance)

@app.route('/bet', methods = ["POST"])
def bet():
    data = {
        'id' : session['user_id']
    }
    if not User.validate_bet(request.form,data):
        return redirect('/play')
    return redirect('/play')