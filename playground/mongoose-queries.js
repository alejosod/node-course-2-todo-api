const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5ba549a92ff0sdasd8ca810fb3281';

if(!ObjectID.isValid(id)){
    console.log('ID not valid')
}

// Todo.find({
//     _id: id
// }).then((result) => {
//     console.log('Todos', result);
// }).catch((err) => {
    
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('todo', todo);
// })

Todo.findById(id).then((result) => {
    if(!result){
        return console.log('id not found')
    }
    console.log(result)
}).catch((err) => {
    console.log(err)
});