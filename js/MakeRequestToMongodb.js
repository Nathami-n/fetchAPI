const {MongoClient} = require('mongodb');

//url to database
const connectionUrl = 'mongodb://localhost:27017';

//Name of database
const dbName = 'school';

//Name of collection
const collectionName = 'students';

//create new client
const client = new MongoClient(connectionUrl,{useNewUrlParser: true, useUnifiedTopology: true});

// make connection to the database server
try {
    client.connect((err, connectedClient) => {
    if(err) throw err;
    return
    })
    console.log('connection was done successfully');
} catch (error) {
    console.error('this is the error:', error);
    
} finally {
    client.close();
}

