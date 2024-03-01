import React, { createContext, useState } from "react";
import ReactRouter from "./Components/ReactRouter";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Nav/Nav";
import Home from "./Components/Nav/InfoComponent/Home";
import About from "./Components/Nav/InfoComponent/About";
import Contact from "./Components/Nav/InfoComponent/Contact";

import SignUp from "./Components/SignUp";
import Fot from "./Components/Footer/Fot";
import Sidebar from "./Components/Sidebar/Sidebar";

import ReadAllProductw1 from "./Website1/ReadAllProductw1.jsx";
import ReadAllProductw2 from "./website2/ReadAllProductw2.jsx";
import ReadAllProductAPI from "./WebsiteAPI/ReadAllProductAPI.jsx";
import ReadAllProductw3 from "./Website3/ReadAllProductw3.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx";
import SearchAndCompare from "./WebsiteAllSearch/SearchAndCompare.jsx";
//import SearchAndCompare from "./WebsiteAllSearch/SearchAndCompare.jsx";





export let GlobalVariableContext = createContext();

const MyApp = () => {
  //let token = localStorage.getItem("token")
  let [token, setToken] = useState(localStorage.getItem("token"));
  const [results, setResults] = useState([]);

  return (
    <div className="AppM">
      <GlobalVariableContext.Provider
        value={{ token: token, setToken: setToken }}
      >
        <div className="App">
          <Navbar />
          <Sidebar></Sidebar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/sign-up" element={<SignUp />} />
          </Routes>
        </div>
        <div className="m-8 flex flex-col justify-center max-w-lg">
          <SearchBar></SearchBar>
        </div>
      
      <SearchAndCompare></SearchAndCompare>
     <ReadAllProductw1></ReadAllProductw1>
     <ReadAllProductw2></ReadAllProductw2>
     <ReadAllProductw3></ReadAllProductw3>
     <ReadAllProductAPI></ReadAllProductAPI> 

        <Fot></Fot>

        <div>
          <ReactRouter></ReactRouter>
        </div>
      </GlobalVariableContext.Provider>
    </div>
  );
};

export default MyApp;