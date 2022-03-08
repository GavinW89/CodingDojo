from flask import Flask
app = Flask(__name__)

@app.route('/')
def helloWorld():
    return 'Hello World!'

@app.route('/dojo')
def dojo():
    return 'Dojo!'

@app.route('/say/<string:name>')
def hello(name):
    return f'Hello {name}'

@app.route('/repeat/<int:num>/<string:phrase>')
def repeat(num,phrase):
    return f'{phrase}'*num

@app.route('/<path:u_path>')
def catch_all(u_path):
    return f"Sorry! {u_path} is not a defined path. Try again."

if __name__=="__main__":
    app.run(debug=True)