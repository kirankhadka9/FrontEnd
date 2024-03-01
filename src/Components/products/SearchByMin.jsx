import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ReadAllProducts = () => {
  let [products, setProducts] = useState([]);
  let navigate = useNavigate();

  let getAllProducts = async () => {
    try {
      let result = await axios.get('http://localhost:8000/products');
      setProducts(result.data.result);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getAllProducts();
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
      {products.map((product, index) => (
        <div key={index}>
          <p>
            Product Name: {product.title}<br />
            Product Price: Nrs {product.price}<br />
            <Slider {...settings}>
              <div>
                <img className="w-full" src={product.images[0]} alt="Product" />
              </div>
              <div>
                <img className="w-full" src={product.images[1]} alt="Product" />
              </div>
              <div>
                <img className="w-full" src={product.images[2]} alt="Product" />
              </div>
            </Slider>
            <button
              style={{
                marginRight: '30px',
                borderRadius: '50%',
                backgroundColor: '#1d4ed8',
                color: '#ffffff',
                padding: '10px',
                cursor: 'pointer'
              }}
              onClick={() => navigate(`/admin/products/${product._id}`)}
            >
              View Details
            </button>
          </p>
        </div>
      ))}
    </div>
  );
  
};

export default ReadAllProducts;