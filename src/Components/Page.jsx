import React, { forwardRef } from "react";
import "../App.css";

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

export default Page;