import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Navbar(){
  const navigate = useNavigate();
  
  return(
    <nav>
     <section onClick={() => navigate("/page1")}>Page 1</section>
     <section onClick={() => navigate("/page2")}>Page 2</section>
     <section onClick={() => navigate("/page3")}>Page 3</section>
     <section onClick={() => navigate("/page4")}>Page 4</section>
     <section onClick={() => navigate("/page5")}>Page 5</section>
     <section onClick={() => navigate("/page6")}>Page 6</section>
     <section onClick={() => navigate("/page7")}>Page 7</section>
     <section onClick={() => navigate("/page8")}>Page 8</section>
     <section onClick={() => navigate("/page9")}>Page 9</section>
     <section onClick={() => navigate("/page10")}>Page 10</section>
     <section onClick={() => navigate("/page11")}>Page 11</section>
     <section onClick={() => navigate("/page12")}>Page 12</section>
     <section onClick={() => navigate("/page13")}>Page 13</section>
    </nav>
  )
}

export default Navbar;