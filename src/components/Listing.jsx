import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Listing = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data.slice(0, productsPerPage));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [productsPerPage]);

  const paginate = (pageNumber) => {
    const startIndex = (pageNumber - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    setFilteredProducts(products.slice(startIndex, endIndex));
    setCurrentPage(pageNumber);
  };

  const filterByCategory = (category) => {
    if (category === 'All') {
      setFilteredProducts(products.slice(0, productsPerPage));
      setCurrentPage(1);
    } else {
      const filtered = products.filter(product =>
        product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered.slice(0, productsPerPage));
      setCurrentPage(1);
    }
  };

  const sortProducts = (sortOption) => {
    const sortedProducts = [...products];
    switch (sortOption) {
      case 'Price: Low to High':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'Rating: High to Low':
        sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      default:
        break;
    }
    setFilteredProducts(sortedProducts.slice(0, productsPerPage));
    setCurrentPage(1);
  };

  if (loading) {
    return <Loading>Loading products...</Loading>;
  }

  return (
    <>
      {/* <Navbar /> */}
      <Container>
        <Sidebar onFilter={filterByCategory} onSort={sortProducts} />
        <Main>
          <Title>Explore Products</Title>
          <ProductGrid>
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </ProductGrid>
          <Pagination>
            <PaginationButton onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </PaginationButton>
            <PaginationButton onClick={() => paginate(currentPage + 1)} disabled={currentPage * productsPerPage >= products.length}>
              Next
            </PaginationButton>
          </Pagination>
        </Main>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
`;

const Main = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333333;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const Loading = styled.div`
  text-align: center;
  font-size: 24px;
  margin-top: 50px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  background-color: #4285f4;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1a73e8;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export default Listing;
