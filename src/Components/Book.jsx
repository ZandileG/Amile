import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import Navbar from "./Navbar";
import "../Styles/Book.css";

import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2";
import Page3 from "../Pages/Page3";
import Page4 from "../Pages/Page4"; 
import Page5 from "../Pages/Page5";
import Page6 from "../Pages/Page6"; 
import Page7 from "../Pages/Page7";
import Page8 from "../Pages/Page8";
import Page9 from "../Pages/Page9";
import Page10 from "../Pages/Page10";
import Page11 from "../Pages/Page11";
import Page12 from "../Pages/Page12";
import Page13 from "../Pages/Page13";
import Page14 from "../Pages/Page14";
import Page15 from "../Pages/Page15";
import Page16 from "../Pages/Page16";
import Page17 from "../Pages/Page17";
import Page18 from "../Pages/Page18";
import Page19 from "../Pages/Page19";
import Page20 from "../Pages/Page20";

const pages = [Page1, Page2, Page3, Page4, 
               Page5, Page6, Page7, Page8,
               Page9, Page10, Page11, Page12,
               Page13, Page14, Page15, Page16, 
               Page17, Page18, Page19, Page20];

function Book(){
  const bookRef = useRef();
  const [showNavbar, setShowNavbar] = useState(false);

  return(
  <main className="book-container">
  <button type="button" className="navbar-toggle" onClick={() => setShowNavbar(!showNavbar)}>
  ☰ {/*Change this icon later to a bookmark that can be pulled down*/}
  </button>      
  
  <HTMLFlipBook
   width={600}
   height={800}
   size="stretch"
   maxShadowOpacity={0.5}
   showCover={false}
   className="flipbook"
   ref={bookRef}>

  {pages.map((PageComponent, index) => (
  <section key={index} className="book-page">
  <section className="page-content"><PageComponent /></section>
  </section>
  ))}
  </HTMLFlipBook>

  {showNavbar && (
  <Navbar pageCount={pages.length} goToPage={(index) => {
          bookRef.current.pageFlip().turnToPage(index);
          setShowNavbar(false);
    }}/>
  )}
  </main>
  );
}

export default Book;