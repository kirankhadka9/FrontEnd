import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminForgotPassword = () => {
  const [email, setEmail] = useState("");

  let navigate = useNavigate();
  let token = localStorage.getItem("token");

  let onSubmit = async (e) => {
    e.preventDefault();
    let data = {
      email: email,
    };
    // console.log(data)

    try {
      let result = await axios({
        url: `http://localhost:8000/web-users/forgot-password`,
        method: "POST",
        data: data,
    
      });

      // localStorage.removeItem("token");
      // navigate("/admin/login");
      setEmail("");
      toast.success("Link has been sent ur gmail.")

    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <ToastContainer />
      Password forgot form :
      <form onSubmit={onSubmit}>
        <br />

        {/* email         */}
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            placeholder="Eg : sun123@gmail.com"
            id="email"
            value={email}
            onChange={(e) => {
              // console.log(e.target.value);
              setEmail(e.target.value);
            }}
          />
        </div>

        <br />
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};
export default AdminForgotPassword;
