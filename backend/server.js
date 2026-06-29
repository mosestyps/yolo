const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');

const app = express();
const upload = multer();

app.use(cors());
app.use(express.json());
app.use(upload.array());

const productRoutes = require('./routes/api/productRoute');
app.use('/api/products', productRoutes);

const MONGODB_URI = process.env.MONGO_URI || 'mongodb://db:27017/yolo_db';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

const db = mongoose.connection;

db.once('open', () => {
    console.log('Database connected successfully');
});

db.on('error', (error) => {
    console.log(error);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});