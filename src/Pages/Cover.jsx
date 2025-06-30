import React, {Fragment} from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import "../Styles/Cover.css"; 

function Cover(){

    
  return(
    <Fragment>
    <nav><Navbar /></nav>
    <aside><Sidebar /></aside>

    <main>
      
    </main>
    </Fragment>
  );
}

export default Cover;