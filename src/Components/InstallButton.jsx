import React, { useEffect, useState } from "react";
import AmileLogo from "../Icons/AmileLogo.png";
import "../App.css";

//This allows the user to install the book on their device without them having to go through the browser settings
function InstallButton(){
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(true);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  function installBook(){
    if (!deferredPrompt) return;
    deferredPrompt.prompt(); 
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted"){
        console.log("App installed!");
      } else {
        console.log("User dismissed the install prompt");
      }
      setShowPrompt(false);
      setDeferredPrompt(null);
    });
  };

function closeInstall(){
  setShowPrompt(false);
}

  return(
    deferredPrompt && showPrompt &&(
    <section className="install-section">
      <button type="button" className="close-button" onClick={closeInstall}>x</button>
      <img src={AmileLogo} alt="Amile Logo" className="amile-logo"/>
      <button type="button" className="install-button" onClick={installBook}>
        Install Book
      </button>
    </section>
    )
  );
}

export default InstallButton;