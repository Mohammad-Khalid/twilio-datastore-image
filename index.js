const express = require('express'),
      cors = require('cors'),
      app = express(),
      routes = require('./routes/query');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/twilio-datastore/v1', routes);

app.listen(3002, () => {
    console.log(`server running at port 3002`);
});