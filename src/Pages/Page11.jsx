import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import "../Styles/Page.css"; 
import "../index.css";

function Page11(){
  const navigate = useNavigate();

  return(
  <Fragment>
    <Navbar />
    <Sidebar />

   <main className="page">
    <img className="image" src="../Images/Page11-Image.png" alt="Page 11 Image" />  
    <p className="paragraph"></p>

    <button className="navigation" type="button" onClick={() => navigate("/page10")}>Back</button>
    <button className="navigation" type="button" onClick={() => navigate("/page12")}>Next</button>    
    </main>
  </Fragment>
  );
}

export default Page11;