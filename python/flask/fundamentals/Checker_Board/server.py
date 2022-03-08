from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def eightSquared():
    return render_template('index.html', rows=8, columns=8)

@app.route('/4')
def fourSquared():
    return render_template("index.html", rows=4, columns=4)

@app.route('/<int:rows>/<int:columns>')
def customBoard(rows,columns):
    return render_template("index.html", rows=rows, columns=columns)


if __name__ == "__main__":
    app.run(debug=True)