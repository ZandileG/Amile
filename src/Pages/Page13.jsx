import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import "../Styles/Page.css"; 
import "../index.css";

function Page13(){
  const navigate = useNavigate();

  return(
  <Fragment>
    <Navbar />
    <Sidebar />
    
    <main className="page">
    <img className="image" src="../Images/Page13-Image.png" alt="Page 13 Image" />  
    <p className="paragraph"></p>

    <button className="navigation" type="button" onClick={() => navigate("/page12")}>Back</button>
    </main>
  </Fragment>
  );
}

export default Page13;