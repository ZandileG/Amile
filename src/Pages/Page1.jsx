import React from "react";
import "..Styles/Page.css";

function Page1(){

  return(
    <main className="page">
      <img src="/images/page1.jpg" alt="Page 1" className="page-image" />
      <p className="page-text">This is the content of Page 1.</p>
    </main>
  );
}

export default Page1;