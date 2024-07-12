import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <Container>
      <Title>Filters</Title>
      <FilterGroup>
        <FilterTitle>Category</FilterTitle>
        <FilterItem>
          <input type="checkbox" id="electronics" />
          <label htmlFor="electronics">Electronics</label>
        </FilterItem>
        <FilterItem>
          <input type="checkbox" id="clothing" />
          <label htmlFor="clothing">Clothing</label>
        </FilterItem>
        {/* Add more filter options here */}
      </FilterGroup>
      <FilterGroup>
        <FilterTitle>Price</FilterTitle>
        <FilterItem>
          <input type="checkbox" id="under-50" />
          <label htmlFor="under-50">Under $50</label>
        </FilterItem>
        <FilterItem>
          <input type="checkbox" id="50-100" />
          <label htmlFor="50-100">$50 - $100</label>
        </FilterItem>
        {/* Add more filter options here */}
      </FilterGroup>
    </Container>
  );
};

const Container = styled.div`
  width: 250px;
  padding: 20px;
  background: #f4f4f4;
  border-right: 1px solid #ddd;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FilterGroup = styled.div`
  margin-bottom: 20px;
`;

const FilterTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const FilterItem = styled.div`
  margin-bottom: 10px;

  input {
    margin-right: 10px;
  }
`;

export default Sidebar;
