import React, { useState, useEffect } from 'react';

const SortBy = () => {
  const [products, setProducts] = useState([]);
  const [maxPriceInput, setMaxPriceInput] = useState('');
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    fetchData();
  }, [maxPrice]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/products1/products-search-by-name/cap/maxPrice?maxPrice=${maxPrice}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleInputChange = (event) => {
    setMaxPriceInput(event.target.value);
  };

  const handleSubmit = () => {
    setMaxPrice(parseFloat(maxPriceInput));
  };

  return (
    <div>
      <h1>Products</h1>
      <input
        type="number"
        placeholder="Enter max price"
        value={maxPriceInput}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Search</button>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            Name: {product.name}, Price: {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortBy;
