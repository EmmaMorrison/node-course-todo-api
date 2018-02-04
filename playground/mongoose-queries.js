const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let userId = '5a751fa15c6bb878382c6fbf';

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User by ID', user);
}).catch((e) => console.log(e));

// let id = '5a76aad3a368fa0c072858c211';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID is not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

//Query Users collection
//User.findById
//handle errors
