import React, { createContext, useState, useEffect } from "react";

const PageContext = createContext();

function PageProvider({ children }){
  const [page, setPage] = useState(null);
  
  return(
    <div>
      <PageContext.Provider value={{ page, setPage }}>
        {children}
      </PageContext.Provider>
    </div>
  );
}

export default PageProvider;