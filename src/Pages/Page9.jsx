import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import "../Styles/Page.css"; 

function Page9(){
  const navigate = useNavigate();

  return(
  <Fragment>
    <Navbar />
    <Sidebar />
    
    <main className="page">
    <img className="image" src="../Images/Page9-Image.png" alt="Page 9 Image" />  
    <p className="paragraph"></p>

    <button className="navigation" type="button" onClick={() => navigate("/page8")}>Back</button>
    <button className="navigation" type="button" onClick={() => navigate("/page10")}>Next</button>    
    </main>
  </Fragment>
  );
}

export default Page9;