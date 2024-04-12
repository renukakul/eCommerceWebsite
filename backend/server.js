import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000;

import connectDB from './config/db.js'
import products from './data/products.js';

connectDB();
const app = express();

app.get('/', (req, res) => {
    res.send("API is Running...")
});

app.get('/api/products', (req, res) =>{
    res.json(products);
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product)
})

app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`));

