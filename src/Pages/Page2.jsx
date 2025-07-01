import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import "../Styles/Page.css"; 
import "../App.css";

function Page2(){
  const navigate = useNavigate();

  return(
  <Fragment>
    <Navbar />
    <Sidebar />
    
    <main className="page">
    <img className="image" src="../Images/Page2-Image.png" alt="Page 2 Image" />  
    <p className="paragraph"></p>

    <button className="navigation" type="button" onClick={() => navigate("/page1")}>Back</button>
    <button className="navigation" type="button" onClick={() => navigate("/page3")}>Next</button>    
    </main>
  </Fragment>
  );
}

export default Page2;