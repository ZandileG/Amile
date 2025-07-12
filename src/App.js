import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Book from "./Pages/Book";

import AudioProvider from "./Context/AudioContext";
import PageProvider from "./Context/PageContext";

function App(){
  return(
    <AudioProvider>
    <PageProvider>
    <Router>
    <Routes>
      <Route path="/" element={<Book />} />
    </Routes>
    </Router>
    </PageProvider>
    </AudioProvider>
  );
}

export default App;