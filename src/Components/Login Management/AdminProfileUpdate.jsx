import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AdminProfileUpdate = () => {
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("male");

  let navigate = useNavigate()
  let token = localStorage.getItem("token");

  let params = useParams()
  let id= params.id

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
    }
    // console.log(data)
  
    try {
    let result = await axios({
      url:`http://localhost:8000/web-users/update-profile`,
      method : "PATCH",
      data : data,
      headers:{
            Authorization:`Bearer ${token}`
      }
    })

    navigate(`/admin/${id}`)

  } catch (error) {
    toast.error(error.message)
  }


  };

  let getAdminProfile =async()=>{

      try {

            let result = await axios({
                  url:`http://localhost:8000/web-users/my-profile`,
                  method : "GET",
                  headers : {
                        Authorization : `Bearer ${token}`
                  }
            })
            // console.log(result.data.result)
            let data =result.data.result;

            setFullName(data.fullName)
            setDob(data.dob)
            setGender(data.gender)
            
      } catch (error) {
            
      }
}
useEffect(()=>{
      getAdminProfile();
},[])


  return (
    <div>
      <ToastContainer/>
      Form
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
        
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
export default AdminProfileUpdate;
