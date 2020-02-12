const express = require('express'),
      client = require('../lib/client'),
      {ObjectId, ObjectID} = require('mongodb');
let router = express.Router();

module.exports = router;

router.post("/find", async(req, res) => {

    console.log(req.body, req.headers);
    const mongoClient = client.createGotClient();

    try{

        const {dbName, tableName, query, projection} = req.body,
              query_params = JSON.parse(query),
              projection_params = JSON.parse(projection);

        if(query_params.hasOwnProperty("_id"))
        {
            if(new ObjectId(query_params._id) == query_params._id)
                query_params._id = ObjectID(query_params._id);
        }

        await mongoClient.connect();

        const db = await mongoClient
                         .db(dbName),
              items = await db.collection(tableName).find(query_params, {projection : projection_params}).toArray();

        console.log(items);
                         
        await mongoClient.close();
        return res.status(200).send({
                    status : true,
                    data : items
                });
    }catch(err){

        await mongoClient.close();
        console.log(err);
        return res.send({
            status : false,
            message : err.message
        });
    }
});

router.post("/insert", async(req, res) => {

    const mongoClient = client.createGotClient();
    try{

        const {dbName, tableName, query, options} = req.body,
              query_params = JSON.parse(query),
              options_params = JSON.parse(options);
        
        await mongoClient.connect();

        const db = await mongoClient
                         .db(dbName),
              items = await db.collection(tableName).insertOne(query_params, options_params);
                         
        mongoClient.close();
        return res.status(200).send({
            status : true,
            data : items
        });
    }catch(err){

        mongoClient.close();
        console.log(err);
        return res.send({
            status : false,
            message : err.message
        });
    }
});

router.post("/update", async(req, res) => {

    console.log(req.body);
    const mongoClient = client.createGotClient();
    try{

        const {dbName, tableName, query, updateDocument, options} = req.body;

        
        await mongoClient.connect();

        const db = await mongoClient
                         .db(dbName);

        const query_params = JSON.parse(query),
              update_docs_params = JSON.parse(updateDocument),
              options_params = JSON.parse(options);

        if(query_params.hasOwnProperty("_id"))
        {
            if(new ObjectId(query_params._id) == query_params._id)
                query_params._id = ObjectID(query_params._id);
        }

        const items = await db.collection(tableName).updateMany(query_params, update_docs_params, options_params);
                         
        mongoClient.close();
        return res.status(200).send({
            status : true,
            data : items
        });
    }catch(err){

        mongoClient.close();
        console.log(err);
        return res.send({
            status : false,
            message : err.message
        });
    }
});

router.post("/remove", async(req, res) => {

    const mongoClient = client.createGotClient();
    try{

        const {dbName, tableName, query, options} = req.body,
              query_params = JSON.parse(query),
              options_params = JSON.parse(options);

        if(query_params.hasOwnProperty("_id"))
        {
            if(new ObjectId(query_params._id) == query_params._id)
                query_params._id = ObjectID(query_params._id);
        }
        
        await mongoClient.connect();

        const db = await mongoClient
                         .db(dbName),
              items = await db.collection(tableName).deleteMany(query_params, options_params);
                         
        mongoClient.close();
        return res.status(200).send({
            status : true,
            data : items
        });
    }catch(err){

        mongoClient.close();
        console.log(err);
        return res.send({
            status : false,
            message : err.message
        });
    }
});

router.post("/count", async(req, res) => {

    const mongoClient = client.createGotClient();
    try{

        const {dbName, tableName, query, options} = req.body,
              query_params = JSON.parse(query),
              options_params = JSON.parse(options);
        
        await mongoClient.connect();

        const db = await mongoClient
                         .db(dbName),
              items = await db.collection(tableName).countDocuments(query_params, options_params);
                         
        mongoClient.close();
        return res.status(200).send({
            status : true,
            data : items
        });
    }catch(err){

        mongoClient.close();
        console.log(err);
        return res.send({
            status : false,
            message : err.message
        });
    }
});
