import React, { forwardRef } from "react";

const Cover = forwardRef((props, ref) => (
  <section className="page page-cover" ref={ref} data-density="hard">
    <section className="page-content">
      <h1>{props.children}</h1>
    </section>
  </section>
));

export default Cover;
