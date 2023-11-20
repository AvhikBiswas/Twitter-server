const express = require('express');
const V1Router = require('../routes/V1/index');

const router = express.Router();

router.use('/v1',V1Router);
module.exports=router;