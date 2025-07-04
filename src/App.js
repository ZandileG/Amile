import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Cover from "./Pages/Cover";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Page6 from "./Pages/Page6";  
import Page7 from "./Pages/Page7";
import Page8 from "./Pages/Page8";
import Page9 from "./Pages/Page9";  
import Page10 from "./Pages/Page10";
import Page11 from "./Pages/Page11";
import Page12 from "./Pages/Page12";
import Page13 from "./Pages/Page13";
import Credits from "./Pages/Credits";

import AudioProvider from "./Context/AudioContext";
import PageProvider from "./Context/PageContext";

function App(){
  return(
    <AudioProvider>
    <PageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
          <Route path="/page7" element={<Page7 />} />
          <Route path="/page8" element={<Page8 />} />
          <Route path="/page9" element={<Page9 />} />
          <Route path="/page10" element={<Page10 />} />
          <Route path="/page11" element={<Page11 />} />
          <Route path="/page12" element={<Page12 />} />
          <Route path="/page13" element={<Page13 />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
      </Router>
      </PageProvider>
      </AudioProvider>
  );
}

export default App;