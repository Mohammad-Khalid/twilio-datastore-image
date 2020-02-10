const {MongoClient} = require('mongodb');

function createGotClient(){
    let uri = `mongodb://localhost:27017`;

    return new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
}

exports.createGotClient = createGotClient;