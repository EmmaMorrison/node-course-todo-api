let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

//GET /Todos
app.get('/todos/:id', (req, res) => {
  let id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('That ID is not valid');
  }

  Todo.findById(id).then((todo)=> {
    if (!todo) {
      return res.status(404).send('That todo could not be found');
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send('That user couldn\'t be found');
  });
});


app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
