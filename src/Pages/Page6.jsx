import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import "../Styles/Page.css"; 
import "../App.css";

function Page6(){
  const navigate = useNavigate();

  return(
  <Fragment>
    <Navbar />
    <Sidebar />

    <main className="page">
    <img className="image" src="../Images/Page6-Image.png" alt="Page 6 Image" />  
    <p className="paragraph"></p>

    <button className="navigation" type="button" onClick={() => navigate("/page5")}>Back</button>
    <button className="navigation" type="button" onClick={() => navigate("/page7")}>Next</button>    
    </main>
  </Fragment>
  );
}

export default Page6;