import React from "react";
import Book from "./Components/Book";
import "./App.css";
import { MusicProvider } from "./Context/MusicContext";
import InstallButton from "./Components/InstallButton";

function App(){
  return(
    <main className="app-container">
      <MusicProvider>
      <Book />
      <section className="install-section">
          <InstallButton />
      </section>
      </MusicProvider>
    </main>
  );
}

export default App;