import React, {Fragment} from "react";
import {useNavigate} from "react-router-dom";

import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import "../Styles/Page.css"; 

function Page9(){
  const navigate = useNavigate();

    
  return(
  <Fragment>
    <nav><Navbar /></nav>
    <aside><Sidebar /></aside>
    
    <main>
      
    <button type="button" onClick={() => navigate("/page8")}>Back</button>
    <button type="button" onClick={() => navigate("/page10")}>Next</button>
    </main>
  </Fragment>
  );
}

export default Page9;