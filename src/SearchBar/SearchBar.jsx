import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [product1Results, setProduct1Results] = useState([]);
  const [product2Results, setProduct2Results] = useState([]);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  const handleSearch = async (e) => {
    if (e) {
      e.preventDefault();
    }
    try {
      let url1 = `http://localhost:8000/products1/products-search-by-name/${encodeURIComponent(searchTerm)}`;
      let url2 = `http://localhost:8000/products2/products-search-by-name/${encodeURIComponent(searchTerm)}`;

      if (maxPrice !== '') {
        url1 += `?maxPrice=${encodeURIComponent(maxPrice)}`;
        url2 += `?maxPrice=${encodeURIComponent(maxPrice)}`;
      }
      console.log(url1);
      console.log(url2);
      const response1 = await fetch(url1);
      const response2 = await fetch(url2);
      const data1 = await response1.json();
      const data2 = await response2.json();
      console.log(data1);
      console.log(data2);

      setProduct1Results(data1);
      setProduct2Results(data2);
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while fetching data.');
      setProduct1Results([]);
      setProduct2Results([]);
    }
  };

  useEffect(() => {
    if (searchTerm || maxPrice !== '') {
      handleSearch();
    }
  }, [searchTerm, maxPrice]);

  return (
    <div className="flex">
      <div className="w-1/2 pr-4">
        <form className='w-full relative' onSubmit={(e) => { 
          e.preventDefault();
          handleSearch();
        }}>
          <div className='relative'>
            <input 
              type="text" 
              placeholder='Search a Product' 
              className='w-full p-4 rounded-full bg-white border border-black'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <input 
              type="text" 
              placeholder='Max Price' 
              className='w-1/2 p-4 rounded-full bg-white border border-black ml-4'
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <button 
              type="submit" 
              className='absolute right-1 top-1/2 -translate-y-1/2 p-4 rounded-full'
            >
              <div style={{ backgroundColor: "#fff", borderRadius: "50%", padding: "8px" }}>
                <AiOutlineSearch />
              </div>
            </button>
          </div>
        </form>
        <div>
        {product1Results
  .filter(item => item.price <= maxPrice)
  .map((item, i) => (
          
            <div key={i} className="relative w-full sm:w-auto md:w-auto lg:w-auto rounded overflow-hidden border border-gray-300 border-bevel border-green-500 shadow-md transition duration-300 ease-in-out transform hover:shadow-lg hover:border-transparent hover:border-gray-450 hover:scale-102" style={{ maxWidth: "40rem", backgroundColor: "#fff", color: "#000" }}>
              <h1> Result: {searchTerm} of Database1</h1>
              <div className="h-72">
                <h1>{item.title}</h1>
                <Slider {...settings}>
                  {item.images.map((image, index) => (
                    <div key={index}>
                      <img className="w-full" src={image} alt="Product" />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="px-6 py-6">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <div className="text-gray-700 text-base overflow-hidden" style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden", WebkitLineClamp: 4 }}>
                  {item.description}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                  <span className="text-sm font-semibold">Price: ${item.price}</span>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 p-4">
                <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-110" onClick={() => navigate(`/products/${item.id}`)}>View</button>
                <button className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full ml-2 transition-transform transform hover:scale-110" onClick={() => navigate(`/products/update/${item.id}`)}>Edit</button>
              </div>
            </div>
          ))}
          {searchTerm && product1Results.length === 0 && (
            <div className="text-center text-gray-700 mt-4">Not Found</div>
          )}
        </div>
      </div>
      <div className="w-1/2 pl-4">
        <h1> Result: {searchTerm} of Database2</h1>
        <div>
          {product2Results
          .filter(item => item.price <= maxPrice)
          .map((item, i) => (
            <div key={i} className="relative w-full sm:w-auto md:w-auto lg:w-auto rounded overflow-hidden border border-gray-300 border-bevel border-green-500 shadow-md transition duration-300 ease-in-out transform hover:shadow-lg hover:border-transparent hover:border-gray-450 hover:scale-102" style={{ maxWidth: "40rem", backgroundColor: "#fff", color: "#000" }}>
              <div className="h-72">
                <h1>{item.title}</h1>
                <Slider {...settings}>
                  {item.images.map((image, index) => (
                    <div key={index}>
                      <img className="w-full" src={image} alt="Product" />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="px-6 py-6">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <div className="text-gray-700 text-base overflow-hidden" style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden", WebkitLineClamp: 4 }}>
                  {item.description}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                  <span className="text-sm font-semibold">Price: ${item.price}</span>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 p-4">
                <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-110" onClick={() => navigate(`/products/${item.id}`)}>View</button>
                <button className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full ml-2 transition-transform transform hover:scale-110" onClick={() => navigate(`/products/update/${item.id}`)}>Edit</button>
              </div>
            </div>
          ))}
          {maxPrice && product2Results.length === 0 && (
            <div className="text-center text-gray-700 mt-4">No products found within the specified price range in Database2</div>
          )}
          {!maxPrice && product2Results.length === 0 && (
            <div className="text-center text-gray-700 mt-4">No products found in Database2</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
