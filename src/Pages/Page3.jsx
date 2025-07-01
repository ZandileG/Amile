import React, {Fragment} from "react";
import {useNavigate} from "react-router-dom";

import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import "../Styles/Page.css"; 

function Page3(){
  const navigate = useNavigate();

    
  return(
  <Fragment>
    <nav><Navbar /></nav>
    <aside><Sidebar /></aside>

    <main>

    <button type="button" onClick={() => navigate("/page2")}>Back</button>
    <button type="button" onClick={() => navigate("/page4")}>Next</button>
    </main>
  </Fragment>
  );
}

export default Page3;