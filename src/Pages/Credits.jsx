import React from "react";
import "../Styles/Page.css";

function Credits(){
  return(
    <section className="page-credits">
      <h1 className="title">Credits</h1>

    <h2 className="page-heading">Site Developed by</h2>
      <p className="page-list">Zandile Gebuza</p>

    <h2 className="page-heading">Narrated & Illustrated by</h2>
      <p className="page-list">Zandile Gebuza</p>

    <h2 className="page-heading">Background Music by</h2>

    <section className="page-list">
    <p className="credit">Adventure (remaster) by Alexander Nakarada 
      <a href="https://www.creatorchords.com" target="_blank" rel="noopener noreferrer">(https://www.creatorchords.com)</a>
      <br />Licensed under Creative Commons BY Attribution 4.0 License<br /> 
    <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">https://creativecommons.org/licenses/by/4.0/</a>
    </p>
    </section>
    </section>
  );
}

export default Credits;