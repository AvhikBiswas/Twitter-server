const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/twitter_dev');
    console.log('Connected to DB');
  } catch (error) {
    console.error('Error connecting to DB:', error);
  }
};

module.exports =  connect ;
