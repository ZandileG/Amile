import React, {Fragment} from "react";
import "../index.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Page(){

  return(
    <Fragment>
    <nav><Navbar /></nav>
    <aside><Sidebar /></aside>

    <main>
      
    </main>
    </Fragment>
  );
}

export default Page;