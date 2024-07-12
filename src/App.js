import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Listing from './components/Listing';
import Description from './components/Description';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Listing />} />
      <Route path="/product/:id" element={<Description />} />
    </Routes>
  );
};

export default App;
