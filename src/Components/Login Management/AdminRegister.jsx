import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AdminRegister = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("male");
  let genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];
  
  let onSubmit = async(e) => {
    e.preventDefault();
    let data = {
      fullName : fullName ,
      dob:dob,
      gender:gender,
      email: email ,
      password:password,
    }
    // console.log(data)

     //adding role
    data = {
      ...data,
      role:"admin"
    } //note data update matra garna khojeko ho so let narakhney
    try {
    let result = await axios({
      url:`http://localhost:8000/web-users`,
      method : "POST",
      data : data
    })
    console.log(data)
    setFullName("")
    setEmail("")
    setPassword("")
    setDob("")
    setGender("male")

    toast.success("A link has been sent to your email. Please click the given link to verify your email.")

  } catch (error) {
    toast.error(error.message)
  }
  };
  return (
    <div className="register">
      <ToastContainer/>
      <br/>
      <div>
      Registration Form:
      <form onSubmit={onSubmit}>
        <br />
        {/* name         */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Enter your full name."
            id="name"
            value={fullName}
            onChange={(e) => {
              // console.log(e.target.value);
              setFullName(e.target.value);
            }}
          />
        </div>
        {/* dob */}
        <div>
          <br />
          <label htmlFor="dob">D.O.B:</label>
          <input
            type="date"
            placeholder="Eg : 2002-08-21"
            id="dob"
            value={dob}
            onChange={(e) => {
              // console.log(e.target.value);
              setDob(e.target.value);
            }}
          />
        </div>
       {/* gender */}<br/>
       <label htmlFor="gender">Select Gender :</label>
        <select 
        id="gender"
        value={gender}
        onChange={(e)=>{
            setGender(e.target.value)
        }}>
         
         {
            genders.map((item, i) => {
                  return (
                    <option key={i} value={item.value}>
                      {item.label}
                    </option>
                  );
                })
         }
       
          
        </select>
        {/* email */}
        <div>
          <br />
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            placeholder="Eg : sun03@gmal.com"
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
            type="text"
            placeholder="Eg : $un123@#"
            id="pw"
            value={password}
            onChange={(e) => {
              // console.log(e.target.value);
              setPassword(e.target.value);
            }}
          />
        </div>
        <br />
        <button type="submit">Proceed</button>
      </form>
    </div>
    </div>
  );
};
export default AdminRegister;
