// import React from 'react'
// import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

// const ReadSpecificProduct = () => {
// // //params bata pass garna
// //   let params = useParams();
// //   // console.log(params);


// //   //query bata pass garna
// //   let [query]= useSearchParams();
// //   console.log(query.get("name"))
// //   console.log(query.get("isMarried"))

// //   let navigate= useNavigate();

// let 
  
//   return (
//     <div>ReadSpecificProduct:

//       {/* <button
//       onClick={()=>{
//         navigate("/products/update/1234123")
//       }}>
//         Edit
//       </button> */}


       

//     </div>
//   )
// }

// export default ReadSpecificProduct
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const ReadSpecificProduct = () => {

  let params = useParams();

  let [product, setProduct] = useState({});

  let getProduct = async () => {
    let result = await axios({
      url: `http://localhost:8000/products/${params.id}`,
      method: "GET",
    });
    setProduct(result.data.result);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <p>product name is {product.name}</p>
      <p>product price is NRs.{product.price}</p>
      <p>product quantity is {product.quantity}</p>
    </div>
  );
};

export default ReadSpecificProduct;