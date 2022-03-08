from flask_app import app
from flask_app.controllers import user_controller, homepage_controller, group_controller, post_controller


if __name__ == "__main__":
    app.run(debug = True)