const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const foodRoutes = require('./routes/food');
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/foods', foodRoutes);

const PORT = 5000;

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));