import React, { createContext, useState } from "react";

export const PageContext = createContext();

function PageProvider({ children }){
    const [page, setPage] = useState(null);

  return(
    <PageContext.Provider value={{ page, setPage}}>
        {children}
      </PageContext.Provider>
  );
}

export default PageProvider;