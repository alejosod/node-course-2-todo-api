var express = require('express')
var bodyParser = require('body-parser')
var {ObjectID} = require('mongodb')

var {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/Todo')
var {User} = require('./models/user')


var app = express()

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    })

    todo.save().then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(400).send(err)
    });
})

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }).catch((err) => {
        res.status(400).send(e)
    });
})

app.get('/todos/:id', (req, res) => {
    var id = req.params.id
    if(!ObjectID.isValid(id)){
        return res.status(404).send()
    }
    Todo.findById(id).then((result) => {
        if(result){
            res.send(result)
        }else{
            res.status(404).send()
        }
        
    }).catch((err) => {
        res.status(400).send(err)
    });
})

app.listen(3000, () => {
    console.log('Started on port 3000')
})