import React, {Fragment} from "react";
import {useNavigate} from "react-router-dom";

import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import "../Styles/Credits.css"; 

function Credits(){
  const navigate = useNavigate();

    
  return(
    <Fragment>
    <nav><Navbar /></nav>
    <aside><Sidebar /></aside>

    <main>
      
        <button type="button" onClick={() => navigate("/page13")}>Back</button>
    </main>
    </Fragment>
  );
}

export default Credits;