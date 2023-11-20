const express = require("express");
const connect = require("./src/Config/Database");
const apiRoutes = require('./src/routes/index');
const bodyParser = require('body-parser');
const TweetService = require('./src/services/tweet-service')

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// app.use('/api',apiRoutes);

app.listen(port, async () => {
    console.log("server running on " + port);
    await connect();  
    const tweetService = new TweetService();
    tweetService.create({content:'hi bro #fine'});
    
});