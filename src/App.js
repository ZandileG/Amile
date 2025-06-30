import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Cover from "./Pages/Cover";
import Pages from "./Components/Pages";
import Credits from "./Pages/Credits";

import AudioProvider from "./Context/AudioContext";
import PageProvider from "./Context/PageContext";

import "./App.css";
import "./index.css";

function App(){
  return(
    <AudioProvider>
    <PageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/Pages" element={<Pages />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
      </Router>
      </PageProvider>
      </AudioProvider>
  );
}

export default App;