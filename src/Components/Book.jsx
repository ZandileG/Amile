import React, {Fragment} from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import "../index.css";

function Book(){

  return(
    <Fragment>
    <nav><Navbar /></nav>
    <aside><Sidebar /></aside>

    <main>
      
    </main>
    </Fragment>
  );
}

export default Book;