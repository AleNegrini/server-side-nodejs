const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Correctly connected to server");

    Dishes.create({
        name: 'Utahpizza',
        description: 'test'
    })
    .then((dish) => {
        console.log(dish);

        Dishes.find({}).exec();
    })
    .then((dishes) => {
        console.log(dishes);
        return Dishes.remove({});
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    });
});