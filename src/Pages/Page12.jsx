import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import "../Styles/Page.css"; 
import "../index.css";

function Page12(){
  const navigate = useNavigate();

  return(
  <Fragment>
    <Navbar />
    <Sidebar />

    <main className="page">
    <img className="image" src="../Images/Page12-Image.png" alt="Page 12 Image" />  
    <p className="paragraph"></p>

    <button className="navigation" type="button" onClick={() => navigate("/page11")}>Back</button>
    <button className="navigation" type="button" onClick={() => navigate("/page13")}>Next</button>    
    </main>
  </Fragment>
  );
}

export default Page12;