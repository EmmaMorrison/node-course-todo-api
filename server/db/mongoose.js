let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp' || 'mongodb://EmmaMorrison:OrangePhone76@ds125288.mlab.com:25288/node-todo-app');

module.exports = {mongoose};
