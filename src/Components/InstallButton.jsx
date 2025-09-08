import { useEffect, useState } from "react";
import "../App.css";

function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handler(e) {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    }

    window.addEventListener("beforeinstallprompt", handler);

    return function cleanup(){
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  async function handleInstallClick(){
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;

    if (choice.outcome === "accepted") {
      console.log("User accepted install");
    } else {
      console.log("User dismissed install");
    }

    setDeferredPrompt(null);
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return(
    <button className="install-btn" onClick={handleInstallClick}>
      📥 Install App
    </button>
  );
}

export default InstallButton;