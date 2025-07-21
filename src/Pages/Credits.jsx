import React from "react";
import "../Styles/Page.css";

function Credits(){
  return(
    <section className="page">
      <h1 className="title">Credits</h1>

<h2 className="page-heading">Website Developed by</h2>
      <p className="page-list">Zandile Gebuza</p>

<h2 className="page-heading">Written, Illustrated & Narrated by</h2>
      <p className="page-list">Zandile Gebuza</p>

<h2 className="page-heading">Music by</h2>
<ul className="page-list">
<li>Adventure (remaster) by Alexander Nakarada (https://www.creatorchords.com)
    <br />Licensed under Creative Commons BY Attribution 4.0 License
    <br />https://creativecommons.org/licenses/by/4.0/</li>

<li>Beyond the Horizon by Alexander Nakarada (https://www.creatorchords.com)
    <br />Licensed under Creative Commons BY Attribution 4.0 License
    <br />https://creativecommons.org/licenses/by/4.0/</li>

<li>Blue Hour by Alexander Nakarada (https://www.creatorchords.com)
    <br />Licensed under Creative Commons BY Attribution 4.0 License
    <br />https://creativecommons.org/licenses/by/4.0/</li>
      </ul>
    </section>
  );
}

export default Credits;