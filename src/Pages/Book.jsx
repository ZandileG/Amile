import React, { useRef, useState, Fragment } from "react";

import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Page from "../Components/Page";
import Cover from "../Components/Cover";

import HTMLFlipBook from "react-pageflip";
import "../Styles/Book.css";

function Book(){
  const bookRef = useRef();

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [state, setState] = useState("ready");
  const [orientation, setOrientation] = useState("portrait");

function goNext(){
  const instance = bookRef.current.pageFlip();
  if (instance){
    instance.flipNext();
  }
}

function goBack(){
  const instance = bookRef.current.pageFlip();
  if (instance) {
    instance.flipPrev();
  }
}

const onFlip = (e) => {
  setCurrentPage(e.data + 1);

  const instance = bookRef.current?.pageFlip?.();
  if (instance && totalPages === 0) {
    setTotalPages(instance.getPageCount());
  }
};

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

    <Cover>BOOK TITLE</Cover>
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
    <Cover>THE END</Cover>
    </HTMLFlipBook>

      <section className="controls">
        <button onClick={goBack}>Back</button>
        <span>
          [{currentPage} of {totalPages}]
        </span>
        <button onClick={goNext}>Next</button>
      </section>

      <section className="status">
        State: <i>{state}</i>, 
        Orientation: <i>{orientation}</i>
      </section>
  </main>
    </Fragment>
  );
}

export default Book;