import React, { useEffect, useState } from "react";

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
    <button className="install-button" onClick={handleInstall}>
        Install Book
      </button>
    )
  );
}

export default InstallButton;