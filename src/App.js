import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Cover from "./Pages/Cover";
import Book from "./Pages/Book";
import Credits from "./Pages/Credits";

import AudioProvider from "./Context/AudioContext";
import PageProvider from "./Context/PageContext";

function App(){
  return(
    <AudioProvider>
    <PageProvider>
      <Router>
        <Routes>
          <Route path="/cover" element={<Cover />} />
          <Route path="/book" element={<Book />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
      </Router>
      </PageProvider>
      </AudioProvider>
  );
}

export default App;