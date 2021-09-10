var express = require('express');
var router = express.Router();
const BookstoreController = require('../controllers/bookstore-controller');

router.get('/', BookstoreController.getBookStore);

module.exports = router;