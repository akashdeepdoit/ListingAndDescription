import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Container>
      <Title>Contact Us</Title>
      <Description>If you have any questions, feel free to reach out to us.</Description>
      <Email>Email: support@akashdeepstore.com</Email>
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

const Email = styled.p`
  font-size: 18px;
  margin-top: 20px;
`;

export default Contact;
