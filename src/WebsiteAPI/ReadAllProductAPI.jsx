import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ReadAllProductAPI = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const getAllProducts = async () => {
    try {
      const result = await axios.get(`https://fakestoreapi.com/products`);
      setProducts(result.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    getAllProducts(); // Fetch products when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once, equivalent to componentDidMount

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {products.map((item, i) => (
        <div
          key={i}
          className="w-full sm:w-auto md:w-auto lg:w-auto rounded overflow-hidden border border-black border-opacity-5 transition duration-300 ease-in-out transform hover:shadow-md hover:border-transparent hover:border-gray-450 hover:scale-102"
          style={{
            maxWidth: "30rem",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "rgba(0, 0, 0, 0.1)",
          }}
        >
          <img className="w-full" src={item.image} alt="Product" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.title}</div>
            <p className="text-gray-700 text-base">{item.description}</p>
          </div>
          <div className="px-6 py-4">
            <span className="text-sm font-semibold">Price: ${item.price}</span>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-right transition-transform transform hover:scale-110"
              onClick={() => {
                navigate(`/products/${item.id}`);
              }}
            >
              View
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-2 float-right transition-transform transform hover:scale-110"
              onClick={() => {
                navigate(`/products/update/${item.id}`);
              }}
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadAllProductAPI;
