const { findAll, findOne, create, update, deletePirate } = require("../controllers/pirate.controller")


module.exports = app => {
    app.route('/api/pirates').get(findAll).post(create);
    app.route('/api/:_id').get(findOne).patch(update).delete(deletePirate);
}