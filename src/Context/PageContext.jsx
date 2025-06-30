import React, { createContext, useState, useEffect } from "react";

function PageProvider({ children }) {
  return (
    <div>
      <PageContext.Provider value={{}}>
        {children}
      </PageContext.Provider>
    </div>
  );
}

export default PageProvider;