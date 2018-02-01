// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5a714391645c8b13d42163bc')
    }, {
      $set: {
        name: 'Emma'
      },
      $inc: {
        age: 26
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a71698afa3ed32c9cf76e2b')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });
  // db.close();
});
