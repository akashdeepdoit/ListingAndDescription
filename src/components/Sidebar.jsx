import React from 'react';
import styled from 'styled-components';

const Sidebar = ({ onFilter, onSort }) => {
  const handleCategoryChange = (e) => {
    onFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <SideNav>
      <SectionTitle>Categories</SectionTitle>
      <Select onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </Select>

      <SectionTitle>Sort By</SectionTitle>
      <Select onChange={handleSortChange}>
        <option value="Price: Low to High">Price: Low to High</option>
        <option value="Price: High to Low">Price: High to Low</option>
        <option value="Rating: High to Low">Rating: High to Low</option>
      </Select>
    </SideNav>
  );
};

const SideNav = styled.nav`
  width: 250px;
  padding: 20px;
  background-color: #f4f4f4;
  border-right: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: fixed;
  height: 100vh;
  position: sticky;
  top: 0;  /* Sticks to the top of the viewport when scrolling */
  height: fit-content;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4285f4;
  }
`;

export default Sidebar;
