import axios from  "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const ReadAllProductw1 = () => {
  let [products, setProduct] = useState([]);
  let navigate = useNavigate();

  let getAllProducts = async () => {
   await axios.get('http://localhost:8000/products1').then((result)=>{

    setProduct(result.data.result)
    }) .catch(e=>
   {
    console.log(e.message)
   }
    )
;
  };

  //   let deleteProduct = async (productId) => {
  //     try {
  //       await axios({
  //         url: `http://localhost:80002/products/${productId}`,
  //         method: "DELETE",
  //       });
  //       getAllProducts();
  //       toast('🦄 Products deleted succesfully', {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //         });
  //     } catch (error) {
  //       console.error("Product not deleted");
  //     }
  //   };

 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {products.map((item, i) => (
        <div
          key={i}
          className="relative w-full sm:w-auto md:w-auto lg:w-auto rounded overflow-hidden border border-gray-300 border-bevel border-green-500 shadow-md transition duration-300 ease-in-out transform hover:shadow-lg hover:border-transparent hover:border-gray-450 hover:scale-102"
          style={{
            maxWidth: "40rem", // Adjust the maxWidth to increase the size
            backgroundColor: "#fff", // Light background color
          }}
        >
          <div className="h-72">
            <h1>THis the data of product1</h1>
          <Slider {...settings}>
              <div>
                <img className="w-full" src={item.images[0]} alt="Product" />
              </div>
              <div>
                <img className="w-full" src={item.images[1]} alt="Product" />
              </div>
              <div>
                <img className="w-full" src={item.images[2]} alt="Product" />
              </div>
            </Slider>
            <div className="font-bold text-xl mb-2">{item.title}</div>
            <p className="text-gray-700 text-base">{item.description}</p>
            <div className="px-6 py-4">
            
          </div>
          </div>
        
          <div className="px-6 py-6">
            <div className="font-bold text-xl mb-2">{item.title}</div>
            <div
              className="text-gray-700 text-base overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                WebkitLineClamp: 4, // Limit to 4 lines
              }}
            >
              
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-white p-2">
              <span className="text-sm font-semibold">
                Description:{item.description}
                Price: ${item.price}
              </span>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 p-4">
            <button
              className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-110"
              onClick={() => {
                navigate(`/products/${item.id}`);
              }}
            >
              View
            </button>
            <button
              className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full ml-2 transition-transform transform hover:scale-110"
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

export default ReadAllProductw1;




  