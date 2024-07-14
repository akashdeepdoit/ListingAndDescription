import React from 'react';
import styled from 'styled-components';
import Listing from '../components/Listing';

const Home = () => {
  return (
    <Container>
      <Title>Welcome to Akashdeep Store</Title>
      <Description>Your one-stop shop for all your needs.</Description>
      <Listing/>
    </Container>
    
  );
};

const Container = styled.div`
  text-align: center;
  padding: 1px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 18px;
`;

export default Home;
