import React, { useContext, useEffect } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image12 from "../Images/Image12.png";
import "../Styles/Page.css";

function Page12(){
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
    { text: "“Wait here,” said Amile,", start: 0, end: 2 },
    { text: "then hurried into the shed to fetch water from the water container.", start: 3, end: 7.1 },
   ],
      zu: [
    { text: "“Linda kancane,” kusho uAmile,", start: 0, end: 3 },
    { text: "ephuthuma engena egumbini lokugcina amanzi, ukuze azonisela isitshalo.", start: 4, end: 7.1 },
  ]
};
    const transcript = transcripts[language];
    const currentTime = currentTimeRef.current;

  return(
    <section className="page">
      <p className="page-text">
        {transcript.map((line, i) => {
          const isActive = currentPage === 12 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
          );
        })}
      </p>

      <img src={Image12} alt="Page 12" className="page-image-12" />
      
      <section className="even">12</section>
    </section>
  );
}

export default Page12;