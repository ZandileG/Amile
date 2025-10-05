import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image2 from "../Images/Image2.png";
import "../Styles/Page.css";

function Page2(){
const { currentTimeRef, language, currentPage } = useContext(MusicContext);
const [, forceUpdate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate((n) => n + 1);
    }, 200); 
    return () => clearInterval(interval);
  }, []);

      const transcripts = {
        en: [
    { text: "In the heart of this beautiful, vibrant town, was a little girl named Amile.", start: 0, end: 5.9 },
    { text: "Amile lived with her parents, Mandisa and Sinalo.", start: 6, end: 9.9 },
    { text: "They named her Amile, a name with many meanings.", start: 10, end: 13.8 },
    { text: "To them, it meant “still standing,”", start: 13.9, end: 16.6 },
    { text: "a promise of the strength and resilience they saw within her.", start: 16.7, end: 20.8 },
   ],
      zu: [
    { text: "Kulelidolobha, kwakune ntombazanyana okuthiwa nguAmile.", start: 0, end: 5.9 },
    { text: "UAmile wayehlala nabazali bakhe, uMandisa noSinalo.", start: 6, end: 9.9 },
    { text: "Bamqamba “uAmile,” igama elinezincazelo eziningi.", start: 10, end: 13.8 },
    { text: "Kubo, kwakusho ukuthi “usamile,”", start: 13.9, end: 16.6 },
    { text: "isithembiso samandla nokuqina ababekubona ngaphakathi kuye.", start: 16.7, end: 20.8 },
  ]
};
    const transcript = transcripts[language];
    const currentTime = currentTimeRef.current;

  return(
    <section className="page">
      <img src={Image2} alt="Page 2" className="page-image-2" />

      <p className="page-text">
        {transcript.map((line, i) => {
        const isActive = currentPage === 2 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <section className="even">2</section>
    </section>
  );
}

export default Page2;