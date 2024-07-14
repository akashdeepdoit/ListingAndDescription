import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Container>
      <Title>About Us</Title>
      <Description>
        Akashdeep Store is a leading retailer of high-quality products. We pride ourselves on providing exceptional customer service and the best products at great prices.
      </Description>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
`;

export default About;
