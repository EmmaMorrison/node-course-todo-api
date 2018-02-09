let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://EmmaMorrison:OrangePhone76@ds125288.mlab.com:25288/node-todo-app' || 'mongodb://localhost:27017/TodoApp');
// mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
