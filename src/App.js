import React, { useState } from 'react';
import Navbar from './components/Navbar.js';
import NewsAPI from './components/NewsAPI.js';
import NewsCart from './components/NewsCart.js';

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsAPI category={category} />
      <NewsCart />
    </>
  )
}

export default App