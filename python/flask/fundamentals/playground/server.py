from flask import Flask, render_template
app = Flask(__name__)
@app.route('/play')
def play():
    return render_template("index.html")

@app.route('/play/<string:num>')
def play(num):
    return render_template("index.html", num=num)
