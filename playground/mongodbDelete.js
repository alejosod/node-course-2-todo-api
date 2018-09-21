const { MongoClient, ObjectId } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to Mongodb server')
    }
    console.log('Connected to Mongodb server')

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then( result => {
    //     console.log(result)
    // })


    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result)
    // }).catch((err) => {
        
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result)
    // }).catch((err) => {
        
    // });

    db.collection('Users').deleteMany({name: 'Alejandro'}).then((result) => {
        console.log(result)
    }).catch((err) => {
        
    });

    db.collection('Users').findOneAndDelete({_id: new ObjectId('5ba286fa94c1bd25e8c82268')}).then((result) => {
        console.log(result)
    }).catch((err) => {
        
    });
})