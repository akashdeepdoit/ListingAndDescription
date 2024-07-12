import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import Sidebar from './Sidebar';

const products = [
  { id: 1, name: 'Product 1', image: 'product1.jpg', price: '$50' },
  { id: 2, name: 'Product 2', image: 'product2.jpg', price: '$60' },
  { id: 3, name: 'Product 3', image: 'product3.jpg', price: '$70' },
  // Add more products here
];

const Listing = () => {
  return (
    <Container>
      <Sidebar />
      <Main>
        <Title>Product Listing</Title>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

export default Listing;
