const BookstoreService = require('../services/bookstore-service');

exports.getBookStore = async (req, res, next) => {
    try {
        return res.render('index', { title : 'Express'});
    } catch (err) {
        return res.status(500).json(err)
    }
}