const {MongoClient} = require('mongodb');

function createGotClient(){
    let uri = `mongodb://database:27017`;

    return new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
}

exports.createGotClient = createGotClient;