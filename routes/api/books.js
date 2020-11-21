const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.get('/books', booksController.findAll);

router.get('/books/:id', booksController.findById);

router.post('/books', booksController.create);

router.delete('/books/:id', booksController.remove);

router.get('/apiKey', function(req, res){
    res.send(process.env.API_KEY);
});

module.exports = router;