// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Users').deleteMany({name: 'Emma'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  // console.log('Unable to delete those Todos', err);
  // });
  //deleteOne
  db.collection('Users').deleteOne({_id: 321}).then((result) => {
    console.log(result);
  }, (err) => {
  console.log('Unable to delete that Todo', err);
  });
  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
  //   console.log(result);
  //   }, (err) => {
  //   console.log('Unable to delete that Todo', err);
  // });
  // db.close();
});
