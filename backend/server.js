import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000;

import connectDB from './config/db.js'
// import products from './data/products.js';



import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

import { notFound, errorHandler } from './middleware/errorMiddlerware.js';
connectDB();
const app = express();

//Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("API is Running...")
});
app.get('/api/config/paypal', (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);


app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes)

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`));

