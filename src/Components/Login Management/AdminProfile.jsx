import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AdminProfile = () => {

      let [profile, setProfile]=useState({});
      let token = localStorage.getItem("token")

      let navigate = useNavigate();
      let getAdminProfile =async()=>{

            try {

                  let result = await axios({
                        url:`http://localhost:8000/web-users/my-profile`,
                        method : "GET",
                        headers : {
                              Authorization : `Bearer ${token}`
                        }
                  })
                  console.log(result.data.result)
                  setProfile(result.data.result)
            } catch (error) {
            }
      }

      useEffect(()=>{
            getAdminProfile();
      },[])
  return (
    <div>AdminProfile:
      <p>Full name  : {profile.fullName} </p>
      <p>Gender : {profile.gender} </p>
      <p>Date of Birth : {new Date(profile.dob).toLocaleDateString()} </p>
      <p>Role : {profile.role} </p>

      {/* <button onClick={()=>{
            navigate("/admin/update/:id")
      }}>Update</button> */}

    </div>
  )
}

export default AdminProfile