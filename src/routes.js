const {
  addBookHandler, getAllBookHandler, getBookByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  }, {
    method: 'GET',
    path: '/books',
    handler: getAllBookHandler,
  }, {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  }, {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editNoteByIdHandler,
  }, {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
