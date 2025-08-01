import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

import Bookmark from "../Images/Bookmark.png"
import Navbar from "./Navbar";
import "../Styles/Book.css";

import Cover from "../Pages/Cover";
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

import Page21 from "../Pages/Page21";
import Page22 from "../Pages/Page22";
import Page23 from "../Pages/Page23";
import Page24 from "../Pages/Page24";
import Page25 from "../Pages/Page25";
import Page26 from "../Pages/Page26";
import Page27 from "../Pages/Page27";
import Page28 from "../Pages/Page28";
import Page29 from "../Pages/Page29";
import Page30 from "../Pages/Page30";
import Credits from "../Pages/Credits";

//These are the pages of my book
const pages = [Cover, Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8, 
               Page9, Page10, Page11, Page12, Page13, Page14, Page15, Page16, 
               Page17, Page18, Page19, Page20, Page21, Page22, Page23, Page24,
               Page25, Page26, Page27, Page28, Page29, Page30, Credits];

function Book(){
  const bookRef = useRef();
  
  const [showNavbar, setShowNavbar] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [animateBookmark, setAnimateBookmark] = useState(false);
  const [currentPage, setCurrentPage] = useState(0); 

//This animates the bookmark icon when the user wants to open or close the navbar
function navbarToggle(){
  setAnimateBookmark(false);
  setTimeout(() => setAnimateBookmark(true), 10); 

//This delays the visibility of the navbar so that the animation can complete 
  setTimeout(() => {
    if (showNavbar){
      setNavbarVisible(false); 
      setTimeout(() => setShowNavbar(false), 400); 
    } else{
      setShowNavbar(true);
      setTimeout(() => setNavbarVisible(true), 50); 
    }
  }, 600); 
}

  return(
  <main className="book-container">

  {/*Only show bookmark for the book's pages not the cover and credits pages*/}
    {(currentPage !== 0 && currentPage !== pages.length - 1) && (
    <button type="button" className="navbar-toggle" onClick={navbarToggle}>
    <img className={animateBookmark ? "animate" : ""} src={Bookmark} alt="Bookmark" /> 
    </button>
  )}

  <HTMLFlipBook
   width={window.innerWidth < 850 ? window.innerWidth - 20 : 850} 
   height={800}
   size="stretch"
   drawShadow={true}
   minWidth={315}
   maxWidth={1000}
   minHeight={400}
   maxHeight={1536}
   maxShadowOpacity={0.5}
   showCover={true}
   mobileScrollSupport={true}  
   className="flipbook"
   ref={bookRef}
   onFlip={e => setCurrentPage(e.data)}>
    
  {pages.map((PageComponent, index) => (
  <section key={index} className="book-page">
  <section className="page-content"><PageComponent /></section>
  </section>
  ))}
  </HTMLFlipBook>

{/*This renders the navigation bar with links to all the pages.*/}
 {showNavbar && (
  <Navbar pageCount={pages.length} goToPage={(index) => {
    bookRef.current.pageFlip().turnToPage(index);
    setShowNavbar(false);
    setNavbarVisible(false);
  }}
    visible={navbarVisible}/>
)}
  </main>
  );
}

export default Book;