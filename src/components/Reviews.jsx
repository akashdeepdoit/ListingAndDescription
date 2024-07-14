import React from 'react';
import styled from 'styled-components';

const reviews = [
  { id: 1, user: 'John Doe', comment: 'Great product!', rating: 5 },
  { id: 2, user: 'Jane Smith', comment: 'Very satisfied.', rating: 4 },
  // Add more reviews here
];

const Reviews = () => {
  return (
    <Container>
      <Title>Customer Reviews</Title>
      {reviews.map((review) => (
        <Review key={review.id}>
          <User>{review.user}</User>
          <Comment>{review.comment}</Comment>
          <Rating>{'⭐'.repeat(review.rating)}</Rating>
        </Review>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Review = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const User = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const Comment = styled.p`
  font-size: 16px;
  margin: 5px 0;
`;

const Rating = styled.p`
  font-size: 16px;
  color: #f5a623;
`;

export default Reviews;
