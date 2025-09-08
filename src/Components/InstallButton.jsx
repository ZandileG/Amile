import React, { useEffect, useState } from "react";
import AmileLogo from "../Images/AmileLogo.png";
import "../App.css";

//This allows the user to install the book on their device without them having to go through the browser settings
function InstallButton(){
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt(); 
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted"){
        console.log("App installed!");
      } else {
        console.log("User dismissed the install prompt");
      }
      setDeferredPrompt(null);
    });
  };

  return(
    deferredPrompt && (
    <section className="install-section">
      <img src={AmileLogo} alt="Amile Logo" className="amile-logo"/>
      <button className="install-button" onClick={handleInstall}>
        Install Book
    </button>
    </section>
    )
  );
}

export default InstallButton;