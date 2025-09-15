import React from "react";
import AuthorImage from "../Images/AuthorPage.png";
import "../Styles/Page.css"

function AuthorPage(){
  return(
    <section className="page">
      <h1 className="title">Meet the Author</h1>
      <img className="author-image" src={AuthorImage} alt="Author" />
      <p className="page-text">Zandile Gebuza is 21 year old Digital Arts student with a love for storytelling and designing 
      unique digital experiences. She enjoys getting lost in thriller novels, unwinding with animated series, and keeping her 
      playlists filled with pop music.</p>
    </section>
  );
}

export default AuthorPage;