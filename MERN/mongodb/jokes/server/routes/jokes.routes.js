const JokeController = require('../controllers/jokes.controller');
const Joke = require('../models/jokes.model');

module.exports = app => {
    app.get('/allJokes', JokeController.allJokes);
    app.get('/oneJoke/:_id', JokeController.findJoke);
    app.post('/createJoke', JokeController.createJoke);
    app.patch('/updateJoke/:_id', JokeController.updateJoke);
    app.delete('/deleteJoke/:_id', JokeController.deleteJoke);

}