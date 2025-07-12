import React from "react";
import { useNavigate, useLocation} from "react-router-dom";

import "../Styles/Navbar.css";
import "../App.css";

function Navbar(){
  const navigate = useNavigate();
  const location = useLocation();
  
  return(
    <nav className="navbar">
     <section className={`nav-cover ${location.pathname === "/cover" ? "active" : ""}`} onClick={() => navigate("/cover")}>Cover</section>
     <section className={`nav-book ${location.pathname === "/book" ? "active" : ""}`} onClick={() => navigate("/pages")}>Book</section>
     <section className={`nav-credits ${location.pathname === "/credits" ? "active" : ""}`} onClick={() => navigate("/credits")}>Credits</section>
    </nav>
  );
}

export default Navbar;