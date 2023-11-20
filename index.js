const express = require("express");
const connect = require("./src/Config/Database");
const HashtagRepository = require('./src/Repository/hashtag-repository');
const app = express();
const port = 3000;


app.listen(port, async () => {
    console.log("server running on " + port);
    await connect();
    let repo = new HashtagRepository;
   
});