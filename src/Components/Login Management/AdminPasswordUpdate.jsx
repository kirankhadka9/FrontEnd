import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminProfileUpdate = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  let navigate = useNavigate();
  let token = localStorage.getItem("token");

  let onSubmit = async (e) => {
    e.preventDefault();
    let data = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    };
    // console.log(data)

    try {
      let result = await axios({
        url: `http://localhost:8000/web-users/update-password`,
        method: "PATCH",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem("token");

      navigate("/admin/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <ToastContainer />
      Password change form :
      <form onSubmit={onSubmit}>
        <br />
        {/* name         */}
        <div>
          <label htmlFor="op">Old password:</label>
          <input
            type="password"
            placeholder="Enter your old password."
            id="op"
            value={oldPassword}
            onChange={(e) => {
              // console.log(e.target.value);
              setOldPassword(e.target.value);
            }}
          />
        </div>
        {/* newPassword */}
        <div>
          <br />
          <label htmlFor="newPassword">New Password :</label>
          <input
            type="password"
            placeholder="Enter new password."
            id="newPassword"
            value={newPassword}
            onChange={(e) => {
              // console.log(e.target.value);
              setNewPassword(e.target.value);
            }}
          />
        </div>

        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
export default AdminProfileUpdate;
