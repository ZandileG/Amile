import React from "react";
import AuthorImage from "../Images/AuthorPage.png";
import "../Styles/Page.css"

function AuthorPage(){
  return(
    <section className="page">
      <img className="author-image" src={AuthorImage} alt="Author" />
    </section>
  );
}

export default AuthorPage;