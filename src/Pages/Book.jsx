import React, { useRef, Fragment } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import HTMLFlipBook from "react-pageflip";
import "../Styles/Book.css";

function Book(){
  const navigate = useNavigate();  
  const bookRef = useRef();

  return(
  <Fragment>
    <Navbar />
    <Sidebar />

    <main className="book">
    <HTMLFlipBook 
    ref={bookRef} 
    width={400}
    height={600}
    size="stretch"
    minWidth={315}
    maxWidth={1000}
    minHeight={400}
    maxHeight={1536}
    showCover={true}
    mobileScrollSupport={true}
    className="flipbook">

    <section className="cover">
    <img className="image" src="../Images/Cover-Image.png" alt="Cover Image" />  
    <p className="paragraph">Cover</p>
    </section>

    <section className="page">
    <img className="image" src="../Images/Page1-Image.png" alt="Page 1 Image" />  
    <p className="paragraph">Page 1</p>
    </section>

    <section className="page">
    <img className="image" src="../Images/Page2-Image.png" alt="Page 2 Image" />  
    <p className="paragraph">Page 2</p>  
    </section>

    <section className="page">
    <img className="image" src="../Images/Page3-Image.png" alt="Page 3 Image" />  
    <p className="paragraph">Page 3</p>
    </section>

    <section className="page">
    <img className="image" src="../Images/Page4-Image.png" alt="Page 4 Image" />  
    <p className="paragraph">Page 4</p>    
    </section>

    <section className="page">
    <img className="image" src="../Images/Page5-Image.png" alt="Page 5 Image" />  
    <p className="paragraph">Page 5</p> 
    </section>

    <section className="page">
    <img className="image" src="../Images/Page6-Image.png" alt="Page 6 Image" />  
    <p className="paragraph">Page 6</p>  
    </section>

    <section className="page">
    <img className="image" src="../Images/Page7-Image.png" alt="Page 7 Image" />  
    <p className="paragraph">Page 7</p> 
    </section>

    <section className="page">
    <img className="image" src="../Images/Page8-Image.png" alt="Page 8 Image" />  
    <p className="paragraph">Page 8</p> 
    </section>

    <section className="page">
    <img className="image" src="../Images/Page9-Image.png" alt="Page 9 Image" />  
    <p className="paragraph">Page 9</p>  
    </section>

    <section className="page">
    <img className="image" src="../Images/Page10-Image.png" alt="Page 10 Image" />  
    <p className="paragraph">Page 10</p>
    </section>

    <section className="credits">
    <img className="image" src="../Images/Crefits-Image.png" alt="Credits Image" />  
    <p className="paragraph">Credits</p>
    </section>
    </HTMLFlipBook>
    </main>
  </Fragment>
  );
}

export default Book;