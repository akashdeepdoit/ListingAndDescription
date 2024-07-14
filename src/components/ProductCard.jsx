import React from 'react';
import styled from 'styled-components';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Image src={product.image} alt={product.title} />
      <Info>
        <Title>{product.title}</Title>
        <Price>${product.price}</Price>
        <Rating>{'⭐'.repeat(Math.round(product.rating.rate))}</Rating>
      </Info>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const Info = styled.div`
  text-align: center;
`;

const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
  color: #333;
`;

const Price = styled.p`
  font-size: 14px;
  color: #b12704;
  margin-bottom: 5px;
`;

const Rating = styled.p`
  font-size: 14px;
  color: #ffa41c;
`;

export default ProductCard;
