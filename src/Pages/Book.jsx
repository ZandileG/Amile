import React, { useRef, forwardRef, useState, useEffect, Fragment } from "react";

import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import HTMLFlipBook from "react-pageflip";
import "../Styles/Book.css";

const PageCover = forwardRef((props, ref) => (
  <section className="page page-cover" ref={ref} data-density="hard">
    <section className="page-content">
    <h1>{props.children}</h1>
    </section>
  </section>
));

const Page = forwardRef(({ number, children }, ref) => (
  <section className="page" ref={ref}>
  <section className="page-content">
  <h2 className="page-header">Page {number}</h2>
  <section className="page-image" />
  <section className="page-text">{children}</section>
  <section className="page-footer">{number}</section>
  </section>
  </section>
));

function Book(){
  const bookRef = useRef();

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [state, setState] = useState("ready");
  const [orientation, setOrientation] = useState("portrait");

function goNext() {
  bookRef.current?.flipNext(); 
}

function goBack() {
  bookRef.current?.flipPrev(); 
}

useEffect(() => {
  if (bookRef.current && typeof bookRef.current.getPageCount === "function") {
    setTotalPages(bookRef.current.getPageCount());
  }
}, []);

 const onFlip = (e) => setCurrentPage(e.data);
 const onChangeState = (e) => setState(e.data);
 const onChangeOrientation = (e) => setOrientation(e.data);

  return(
  <Fragment>
    <Navbar />
    <Sidebar />

    <main className="book-wrapper">
    <HTMLFlipBook 
    width={550}
    height={733}
    size="stretch"
    minWidth={315}
    maxWidth={1000}
    minHeight={400}
    maxHeight={1536}
    maxShadowOpacity={0.5}
    showCover={true}
    mobileScrollSupport={true}
    onFlip={onFlip}
    onChangeOrientation={onChangeOrientation}
    onChangeState={onChangeState}
    ref={bookRef} 
    className="flipbook">

    <PageCover>BOOK TITLE</PageCover>
    <Page number={1}>Page 1 Content</Page>
    <Page number={2}>Page 2 Content</Page>
    <Page number={3}>Page 3 Content</Page>
    <Page number={4}>Page 4 Content</Page>
    <Page number={5}>Page 5 Content</Page>
    <Page number={6}>Page 6 Content</Page>
    <Page number={7}>Page 7 Content</Page>
    <Page number={8}>Page 8 Content</Page>
    <Page number={9}>Page 9 Content</Page>
    <Page number={10}>Page 10 Content</Page>
    <PageCover>THE END</PageCover>
    </HTMLFlipBook>

      <section className="controls">
        <button onClick={goBack}>Previous Page</button>
        <span>
          [{currentPage} of {totalPages}]
        </span>
        <button onClick={goNext}>Next Page</button>
      </section>

      <section className="status">
        State: <i>{state}</i>, Orientation: <i>{orientation}</i>
      </section>
  </main>
    </Fragment>
  );
}

export default Book;