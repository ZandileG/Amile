import React from "react";
import "../Styles/Page.css";

function Credits(){
  return(
    <section className="page-credits">
      <h1 className="title">Credits</h1>

    <h2 className="page-heading">Sound Effects by</h2>

    <section className="page-list">
    <p className="credit">Alexander Nakarada</p>
    <p className="credit">AudioKid Sound FX Library</p>
    <p className="credit">FAC2SOUND FX</p>
    <p className="credit">Freesound Community</p>
    <p className="credit">GamesLover 1234</p>
    <p className="credit">Sound Effect TV</p>
    <p className="credit">SOUNDLAB</p>

    <p className="license"><br /> Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons</a> BY Attribution 4.0 License</p>
    </section>
    
    </section>
  );
}

export default Credits;