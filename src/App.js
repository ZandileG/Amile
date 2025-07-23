import React from "react";
import Book from "./Components/Book";
import "./App.css";
import { MusicProvider } from "./Context/MusicContext";

function App(){
  return(
    <main className="app-container">
      <MusicProvider>
      <Book />
      </MusicProvider>
    </main>
  );
}

export default App;