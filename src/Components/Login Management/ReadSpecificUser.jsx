import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ReadSpecificUser = () => {

      let [user, setUser]=useState({});
      let token = localStorage.getItem("token")

      let navigate = useNavigate();
      let params=useParams()
      let id = params.id;


      let getAdminUser =async()=>{

            try {

                  let result = await axios({
                        url:`http://localhost:8000/web-users/${id}`,
                        method : "GET",
                        headers : {
                              Authorization : `Bearer ${token}`
                        }
                  })
                  console.log(result.data.result)
                  setUser(result.data.result)
                  
            } catch (error) {
                  
            }

      }
console.log(user);

      useEffect(()=>{
            getAdminUser();
      },[])
  return (
    <div>Specific User DashBoard:
      <p>Full name  : {user.fullName} </p>
      <p>Gender : {user.gender} </p>
      <p>Date of Birth : {new Date(user.dob).toLocaleDateString()} </p>
      <p>Role : {user.role} </p>

      <button onClick={()=>{
            navigate("/admin/update/:id")
      }}>Update</button>

    </div>
  )
}

export default ReadSpecificUser