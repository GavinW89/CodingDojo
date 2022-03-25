const { findAll, createAuthor, updateAuthor, deleteAuthor } = require("../controllers/author.controller")


module.exports = app => {
    app.route('/api/authors').get(findAll).post(createAuthor);
    app.route('/api/:_id').get(updateAuthor).patch(updateAuthor).delete(deleteAuthor)
}