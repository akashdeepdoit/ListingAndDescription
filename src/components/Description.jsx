import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Reviews from './Reviews';

const products = [
  { id: 1, name: 'Product 1', image: 'product1.jpg', price: '$50', description: 'Description of Product 1' },
  { id: 2, name: 'Product 2', image: 'product2.jpg', price: '$60', description: 'Description of Product 2' },
  { id: 3, name: 'Product 3', image: 'product3.jpg', price: '$70', description: 'Description of Product 3' },
  // Add more products here
];

const Description = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  return (
    <Container>
      <Image src={product.image} alt={product.name} />
      <Content>
        <Name>{product.name}</Name>
        <Price>{product.price}</Price>
        <DescriptionText>{product.description}</DescriptionText>
        <Reviews />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 20px;
`;

const Image = styled.img`
  width: 400px;
  height: auto;
  margin-right: 20px;
`;

const Content = styled.div`
  flex: 1;
`;

const Name = styled.h1`
  font-size: 28px;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 22px;
  color: #888;
  margin-bottom: 20px;
`;

const DescriptionText = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;

export default Description;
