import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import "../Styles/Credits.css"; 
import "../App.css";

function Credits(){
  const navigate = useNavigate();
    
  return(
    <Fragment>
    <Navbar />
    <Sidebar />

    <main className="credits-page">
    <img className="credits-image" src="../Images/CreditsImage.png" alt="Credits Image" />  
    
    <button className="navigation" type="button" onClick={() => navigate("/page13")}>Back</button>
    </main>
    </Fragment>
  );
}

export default Credits;