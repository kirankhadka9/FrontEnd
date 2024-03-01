import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import SignUpNav from './SignUpNav.jsx'
import AdminRegister from './Login Management/AdminRegister.jsx'
import AdminLogin from './Login Management/AdminLogin.jsx'

const SignUp = () => {
  return (
    <div >

      <Routes>
        <Route
        path="/admin/sign-up" 
        element={<div style={{marginRight:"315px"}}>
          
          <SignUpNav style={{align:"centre"}}></SignUpNav>
          <Outlet></Outlet>

        </div>} >
          {/* <Route index element={<div>Hello</div>}></Route> */}
          
          <Route path='login'  element={<div><AdminLogin/></div>}></Route>
          <Route path='register' element={<div><AdminRegister/></div>}></Route>

        </Route>

      </Routes>
    </div>
  )
}

export default SignUp