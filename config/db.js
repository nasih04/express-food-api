const mongoose = require('mongoose');

require('dotenv').config();

const connectDB = async () => {
    try {
       await mongoose.connect(process.env.MONGO);
       console.log('Database connected');
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectDB;