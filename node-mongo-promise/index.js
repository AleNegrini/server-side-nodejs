const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'conFusion';

const dbOper = require('./operations');

MongoClient.connect(url).then((client) => {
    assert.equal(err, null);
    console.log('Connected correctly to server');

    const db = client.db(dbName);

    dbOper.insertDocument(db, {name: "Vadonut", description: "Test"}, 'dishes')
    .then((result) => { 
        console.log('Insert Document: \n', result.ops);
        return dbOper.findDocuments(db, 'dishes');
    })
    .then((docs) => {
        console.log('Found Documents: \n',docs); 
        return dbOper.updateDocument(db, {name:"Vadonut"}, {description: "Updated Test"}, 'dishes');
    })
    .then((result) => {
        console.log("Updated Document: \n", result.result);
        return dbOper.findDocuments(db, 'dishes');
    })
    .then((docs) => {
        console.log('Found Documents: \n',docs); 
        return db.dropCollection('dishes');
    })
    .then((result) => {
        console.log('Dropped collection: ', result);
        client.close;
    })
    .catch((err) => console.log(err));;
})
.catch((err) => console.log(err));