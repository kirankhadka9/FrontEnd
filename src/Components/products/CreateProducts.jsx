import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateProducts = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();

  let onSubmit = async (e) => {
    e.preventDefault();

    let data = {
      name: name,
      price: price,
      description: description,
      image: image,
    };
    console.log(data);

    try {
      let result = await axios({
        url: `http://localhost:8000/products`,
        method: "POST",
        data: data,
      });
      setId("");
      setName("");
      setPrice("");
      setDescription("");
      setImage("");

      // toast(`product successfully created.`)
      toast.success("🦄 product successfully created.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log(error);
      toast.error("🦄 Error!! ", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div>
      <div>
        <br />
        <br />
        <ToastContainer />
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Enter product name."
            id="name"
            value={name}
            onChange={(e) => {
              // console.log(e.target.value);
              setName(e.target.value);
            }}
          />
          <br />
          <br />
          <label htmlFor="id">Id:</label>
          <input
            type="number"
            placeholder="Enter I"
            id="id"
            value={id}
            onChange={(e) => {
              // console.log(e.target.value);
              setId(e.target.value);
            }}
          />
          <br />
          <br />
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            placeholder="Enter product Description"
            id="name"
            value={description}
            onChange={(e) => {
              // console.log(e.target.value);
              setDescription(e.target.value);
            }}
          />
          <br />
          <br />

          <input
            type="text"
            placeholder="Enter product Image Link"
            id="name"
            value={image} // Use the image state here
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <br />
          <br />
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            placeholder="Eg : 200"
            id="price"
            value={price}
            onChange={(e) => {
              // console.log(e.target.value);
              setPrice(e.target.value);
            }}
          />

          <br />
          <br />
          <button type="submit">Proceed</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProducts;
