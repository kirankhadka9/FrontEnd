import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalVariableContext } from "../../MyApp";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let global = useContext(GlobalVariableContext);

  let navigate = useNavigate();

  let onSubmit = async (e) => {
    e.preventDefault();
    let data = {
      email: email,
      password: password,
    };
    try {
      let result = await axios({
        url: `http://localhost:8000/web-users/login`,
        method: "POST",
        data: data,
      });
      console.log(result);

      let token = result.data.data;
      localStorage.setItem("token", token);
      global.setToken(token);

      navigate("/admin");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <div style={{ border: "2px solid #0002", padding: "10px" }}>
        <br />
        Login Form:
        <ToastContainer />
        <div className="login">
          <form onSubmit={onSubmit} style={{}}>
            {/* email */}
            <div>
              <br />
              <label htmlFor="email">E-mail:</label>
              <input
                // className="email"
                type="email"
                placeholder="Eg : abcd@gmail.com"
                id="email"
                value={email}
                onChange={(e) => {
                  // console.log(e.target.value);
                  setEmail(e.target.value);
                }}
              />
            </div>
            {/* pw */}
            <div>
              <br />
              <label htmlFor="pw">Password:</label>
              <input
                // className="password"
                type="password"
                placeholder="Eg : $alexandor@1234#"
                id="pw"
                value={password}
                onChange={(e) => {
                  // console.log(e.target.value);
                  setPassword(e.target.value);
                }}
              />
            </div>
            <br />
            <button type="submit" style={{ marginLeft: "30px" }}>
              Login
            </button>
            <br></br>
            <br></br>
            <br></br>

            <div
              // className="forgot password"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/admin/sign-up/forgot-password");
              }}
            >
              <u>Forgot Password</u>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

//login : make form-> hit api(token)->save token to local storage->navigate (admin)
