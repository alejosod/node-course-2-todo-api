const {MongoClient, ObjectId} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
    if(err){
        return console.log('Unable to connect to DataBase');
    }
    console.log('Connected to BaseDate')

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectId('5ba51bd32e3d7e484a6dcb7e')
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    //     }
    // ).then((result) => {
    //     console.log(result)
    // }).catch((err) => {
        
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId('5ba2871b975daf261c62cf6d')
    },{
        $set:{
            name: 'Alejandro'
        },
        $inc: {
            age : 3
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    });
})