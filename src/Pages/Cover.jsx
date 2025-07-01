import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import "../Styles/Cover.css"; 
import "../App.css";

function Cover(){
  const navigate = useNavigate();

  return(
    <Fragment>
    <Navbar />
    <Sidebar />

    <main className="cover-page">
    <img className="cover-image" src="../Images/CoverImage.png" alt="Cover Image" />  
    
    <button className="navigation" type="button" onClick={() => navigate("/page1")}>Next</button>
    </main>
    </Fragment>
  );
}

export default Cover;