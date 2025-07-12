import React, { useRef, Fragment } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import HTMLFlipBook from "react-pageflip";
import "../Styles/Page.css";

function Page1(){
  const navigate = useNavigate();  
  const bookRef = useRef();

  return(
  <Fragment>
    <Navbar />
    <Sidebar />

    <main className="page">
    <img className="image" src="../Images/Page1-Image.png" alt="Page 1 Image" />  
    <p className="paragraph"></p>

    <button className="navigation" type="button" onClick={() => navigate("/")}>Back</button>
    <button className="navigation" type="button" onClick={() => navigate("/page2")}>Next</button>    
    </main>
  </Fragment>
  );
}

export default Page1;