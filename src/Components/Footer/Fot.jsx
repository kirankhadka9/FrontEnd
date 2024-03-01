

import React from 'react'
import {FaFacebookSquare,FaGithubSquare,FaInstagram,FaTwitterSquare} from 'react-icons/fa'
const Fot = () => {
  return (
    <footer className="bg-gray-900 text-white" >
    <div className="md:flex md:justify-between md:items-centre sm:px-12 px-4 bg-[#ffffff19] py-0">
<h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
<span className="text-teal-400">It's Free.</span> Make Shopping Effective
          
</h1>
<div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
      
        <span>© 2020 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        
      </div>
      <div className='flex justify-between md:w-[30%] my-6'>  
      <FaFacebookSquare size={30}></FaFacebookSquare>
      <br></br>
        <FaInstagram size={30}></FaInstagram>
        <br>
        </br>
        <FaGithubSquare size={30}></FaGithubSquare>
        <br></br>
        <FaTwitterSquare size={30}></FaTwitterSquare>
        </div>
        </div>
        </footer>
  )
}

export default Fot