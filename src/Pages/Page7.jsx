import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import "../Styles/Page.css"; 
import "../index.css";

function Page7(){
  const navigate = useNavigate();

  return(
  <Fragment>
    <Navbar />
    <Sidebar />

    <main className="page">
    <img className="page7-image" src="../Images/Page7-Image.png" alt="Page 7 Image" />  
    <p className="paragraph"></p>

    <button className="navigation" type="button" onClick={() => navigate("/page6")}>Back</button>
    <button className="navigation" type="button" onClick={() => navigate("/page8")}>Next</button>    
    </main>
  </Fragment>
  );
}

export default Page7;