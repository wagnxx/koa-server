const Router = require('koa-router');
const router = new Router();

const BooksController = require('./BooksController');
const booksController = new BooksController();

const IndexController = app => {
  router.get('/', booksController.actionIndex);
  router.get('/books', booksController.actionIndex);
  router.get('/books/list', booksController.actionIndex);
  router.get('/books/detail', booksController.actionIndex);

  app.use(router.routes());
};

module.exports = IndexController;
