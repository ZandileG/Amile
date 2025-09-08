import React from "react";
import Book from "./Components/Book";
import InstallButton from "./Components/InstallButton";
import "./App.css";
import { MusicProvider } from "./Context/MusicContext";

function App(){
  return(
    <main className="app-container">
      <MusicProvider>
      <Book />
      <InstallButton />
      </MusicProvider>
    </main>
  );
}

export default App;