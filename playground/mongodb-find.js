// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').find({name: 'Emma'}).toArray().then((docs) => {
    console.log('User details');
    console.log(JSON.stringify(docs, undefined, 4));
    }, (err) => {
    console.log('Unable to fetch user', err);
  });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count} `);
  //
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a6edf43bf4f140fe8ba9e66')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 4));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });
  // db.close();
});
