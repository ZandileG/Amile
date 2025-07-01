import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import "../Styles/Page.css";

function Page5(){
  const navigate = useNavigate();

  return(
  <Fragment>
    <Navbar />
    <Sidebar />

   <main className="page">
    <img className="image" src="../Images/Page5-Image.png" alt="Page 5 Image" />  
    <p className="paragraph"></p>

    <button className="navigation" type="button" onClick={() => navigate("/page4")}>Back</button>
    <button className="navigation" type="button" onClick={() => navigate("/page6")}>Next</button>    
    </main>
  </Fragment>
  );
}

export default Page5;