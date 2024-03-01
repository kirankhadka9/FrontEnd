import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SearchAndCompare = () => {
  let [products1, setProducts1] = useState([]);
  let [products2, setProducts2] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get('http://localhost:8000/products1');
        const response2 = await axios.get('http://localhost:8000/products2');

        setProducts1(response1.data.result);
        setProducts2(response2.data.result);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {products1.map((item, i) => (
          <div key={i} className="relative ...">
            {/* Your product display logic */}
          </div>
        ))}
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {products2.map((item, i) => (
          <div key={i} className="relative ...">
            {/* Your product display logic */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchAndCompare;
