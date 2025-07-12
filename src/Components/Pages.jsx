import React, {Fragment} from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import "../index.css";

function Pages(){

  return(
    <Fragment>
    <nav><Navbar /></nav>
    <aside><Sidebar /></aside>

    <main>
    </main>
    </Fragment>
  );
}

export default Pages;