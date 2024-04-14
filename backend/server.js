import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000;

import connectDB from './config/db.js'
// import products from './data/products.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js'

import { notFound, errorHandler } from './middleware/errorMiddlerware.js';
connectDB();
const app = express();

app.get('/', (req, res) => {
    res.send("API is Running...")
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`));

