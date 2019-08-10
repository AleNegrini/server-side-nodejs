const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'conFusion';
const collectionDishes = 'dishes'

const dbOper = require('./operations');

MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);
    console.log('Connected correctly to server');

    const db = client.db(dbName);

    dbOper.insertDocument(db, {name: "Vadonut", description: "Test"}, 'dishes', (result) => { 
        console.log('Insert Document: \n', result.ops);

        dbOper.findDocuments(db, 'dishes', (docs) => {
           console.log('Found Documents: \n',docs); 

           dbOper.updateDocument(db, {name:"Vadonut"}, {description: "Updated Test"}, 'dishes', (result) => {
                console.log("Updated Document: \n", result.result);

                dbOper.findDocuments(db, 'dishes', (docs) => {
                    console.log('Found Documents: \n',docs); 

                    db.dropCollection('dishes', (result) => {
                        console.log('Dropped collection: ', result);
                        client.close;
                    });
                });
           });
        });
    });
});