from flask import Flask, render_template, session, redirect, request

app= Flask(__name__)
app.secret_key = "krabby patty formula"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/users', methods=["POST"])
def users_post():
    session['name']= request.form['name']
    session['email'] = request.form['email']

    return redirect('/afterpost')

@app.route('/afterpost')
def second():
    return render_template('second.html', name = session['name'])

if __name__ == "__main__":
    app.run(debug=True)