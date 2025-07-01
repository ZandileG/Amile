import React from "react";
import { useNavigate, useLocation} from "react-router-dom";
import "../App.css";

function Navbar(){
  const navigate = useNavigate();
  const location = useLocation();
  
  return(
    <nav className="navbar">
     <section className={`cover ${location.pathname === "/" ? "active" : ""}`} onClick={() => navigate("/")}>Cover</section>
     <section className={`page1 ${location.pathname === "/page1" ? "active" : ""}`} onClick={() => navigate("/page1")}>Page 1</section>
     <section className={`page2 ${location.pathname === "/page2" ? "active" : ""}`} onClick={() => navigate("/page2")}>Page 2</section>
     <section className={`page3 ${location.pathname === "/page3" ? "active" : ""}`} onClick={() => navigate("/page3")}>Page 3</section>
     
     <section className={`page4 ${location.pathname === "/page4" ? "active" : ""}`} onClick={() => navigate("/page4")}>Page 4</section>
     <section className={`page5 ${location.pathname === "/page5" ? "active" : ""}`} onClick={() => navigate("/page5")}>Page 5</section>
     <section className={`page6 ${location.pathname === "/page6" ? "active" : ""}`} onClick={() => navigate("/page6")}>Page 6</section>
     <section className={`page7 ${location.pathname === "/page7" ? "active" : ""}`} onClick={() => navigate("/page7")}>Page 7</section>
     <section className={`page8 ${location.pathname === "/page8" ? "active" : ""}`} onClick={() => navigate("/page8")}>Page 8</section>
     <section className={`page9 ${location.pathname === "/page9" ? "active" : ""}`} onClick={() => navigate("/page9")}>Page 9</section>
     <section className={`page10 ${location.pathname === "/page10" ? "active" : ""}`} onClick={() => navigate("/page10")}>Page 10</section>

     <section className={`page11 ${location.pathname === "/page11" ? "active" : ""}`} onClick={() => navigate("/page11")}>Page 11</section>
     <section className={`page12 ${location.pathname === "/page12" ? "active" : ""}`} onClick={() => navigate("/page12")}>Page 12</section>
     <section className={`page13 ${location.pathname === "/page13" ? "active" : ""}`} onClick={() => navigate("/page13")}>Page 13</section>
     <section className={`credits ${location.pathname === "/credits" ? "active" : ""}`} onClick={() => navigate("/credits")}>Credits</section>
    </nav>
  );
}

export default Navbar;