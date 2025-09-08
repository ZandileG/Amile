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
      <div style={{ marginTop: "20px", textAlign: "center" }}>
          <InstallButton />
        </div>
      </MusicProvider>
    </main>
  );
}

export default App;