import React from "react";
import { useNavigate, useLocation} from "react-router-dom";

import "../App.css";

function Navbar(){
  const navigate = useNavigate();
  const location = useLocation();
  
  return(
    <nav className="navbar">
     <section className="page-number">Page 1</section>
     <section className="page-number">Page 2</section>
     <section className="page-number">Page 3</section>
     <section className="page-number">Page 4</section>
     <section className="page-number">Page 5</section>
     <section className="page-number">Page 6</section>
     <section className="page-number">Page 7</section>
     <section className="page-number">Page 8</section>
     <section className="page-number">Page 9</section>
     <section className="page-number">Page 10</section>   
    </nav>
  );
}

export default Navbar;