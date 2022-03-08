from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)

app.secret_key = 'deez8923'

@app.route('/c')
def c():
    print(session['count'])
    session['count'] += 1
    return redirect('/')

@app.route('/reset_cnt')
def reset_cnt():
    session.clear()
    return redirect("/")

@app.route('/')
def count():
    if 'count' not in session:
        session['count']=0
    else:
        session['count'] += 1
    return render_template('index.html', count = session['count'])


if __name__=='__main__':
    app.run(debug = True)