import { Row, Col } from 'react-bootstrap';
// import { useEffect, useState } from 'react';
import { useGetProductsQuery } from '../slices/productSlice';
import Product from '../components/Product';
// import products from '../products-and-images/products'

// import axios from 'axios'


const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
       {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error?.data.message || error.error}</div>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;