import React, { useState } from "react";
import img from "../../images/ham.jpeg"
import {HiMenuAlt3} from "react-icons/hi"
import {MdOutlineDashboard} from "react-icons/md"
import {TbReportAnalytics} from "react-icons/tb"
import {AiOutlineUser,AiOutlineHeart} from "react-icons/ai"
import {FiMessageSquare,FiFolder,FiShoppingCart} from "react-icons/fi"


import { Link, useSearchParams } from "react-router-dom";
import Homecomponent from "../Nav/InfoComponent/Homecomponent";
const Sidebar = () => {
  const menus =[
    {name:"dashboard",link:'/',icon:MdOutlineDashboard},
    {name:"messages",link:'/',icon:FiMessageSquare},
    {name:"user",link:'/',icon:AiOutlineUser},
    {name:"analytics",link:'/',icon:TbReportAnalytics,margin:true},
    {name:"File Manager",link:'/',icon:FiFolder},
    {name:"Cart",link:'/',icon:FiShoppingCart},
    {name:"Saved",link:'/',icon:AiOutlineHeart,margin:true},
 

  ];
   const[open,setOpen]=useState(false)
  return (
    <section className="flex gap-6">
      <div className={`bg-[#0e0e0e] min-h-[795px] ${open? 'w-72':'w-16'} duration-500 text-gray-100 px-4`}>
<div className="py-3 flex justify-end">

  <HiMenuAlt3 size={26} className="cursor-pointer" onClick={()=>setOpen(!open)}/>

</div>
<div className="mt-4 flex flex-col gap-4 relative">
  {
    menus?.map((menu,i)=>(
  <Link to ={menu?.link} key ={i} className={`${menu?.margin && "mt-5"}flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}>
    <div> 
      {React.createElement(menu?.icon,{size:"20"})}
    </div>
    <h2 
    style={{transitionDelay:`${i+3}00ms`}}
    
    className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>
      {menu?.name} </h2>
  
  </Link>
  ))}
</div>

      </div>
      <div className="m-3 text-x1 text-white font-semibold">
Sidebar
      </div>
      <Homecomponent></Homecomponent>
    </section>
  );
};

export default Sidebar;
