// frontend/src/components/ProductList.jsx
import React, { useState, useEffect } from 'react';
import SearchFilter from './ui/SearchFilter';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/product`);
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const filterProducts = () => {
      if (keyword) {
        const filtered = products.filter((product) => {
          return product.name.toLowerCase().includes(keyword.toLowerCase());
        });
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts(products);
      }
    };
    filterProducts();
  }, [keyword, products]);

    const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto p-5">
      <SearchFilter keyword={keyword} onChange={handleKeywordChange} />
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {filteredProducts.map((product) => (
          <div key={product._id} className="p-4">
            <div className="w-full h-[301px] rounded overflow-hidden">
              <img
                src={product.images[0]?.url}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
              />
            </div>
            <p className="tex-sm capitalize text-gray-500 mb-1">
              {product.category}
            </p>
            <h2 className="font-semibold text-xl mb-1">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="font-semibold">$ {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;