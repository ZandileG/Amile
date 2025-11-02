import React, { useContext, useState, useEffect } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image34 from "../Images/Image34.png";
import "../Styles/Page.css";

function Page34(){
  const { currentTimeRef, language, currentPage } = useContext(MusicContext);
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate((n) => n + 1);
    }, 200); 
    return () => clearInterval(interval);
  }, []);

    const transcripts = {
      en: {
      paragraphs: [
  [
    { text: "After a while,", start: 0, end: 1 },
    { text: "Khaya ran back home to celebrate with her family.", start: 2, end: 5 },
   ],
   [
    { text: "Amile’s parents hurried over, still in shock,", start: 6, end: 10 },
    { text: "and wrapped her in a warm embrace.", start: 11, end: 15 },
    { text: "I guess we’re staying,", start: 16, end: 18 },
    { text: "they said, grinning through happy tears.", start: 19, end: 21 },
   ]
  ]
  },
      zu: {
      paragraphs: [
   [    
    { text: "Emva kwesikhashana,", start: 0, end: 1.7 },
    { text: "uKhaya wagijima wabuyela kubo eyobungaza imvula nomndeni wakhe.", start: 1.8, end: 6.5 },
  ],
  [
    { text: "Abazali bakaAmile baphuthuma, besashaqekile, bamgona ngokufudumala.", start: 6.6, end: 13.2 },
    { text: "“Ngicabanga ukuthi sizohlala,”", start: 13.3, end: 16.2 },
    { text: "kusho bona, kwehla izinyembezi zenjabulo.", start: 16.3, end: 19.6 },
  ]
]
      }
};
    const { paragraphs } = transcripts[language];
    const currentTime = currentTimeRef.current;

  return(
  <section className="page">
  <section className="page-text">
   {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {   
        const isActive = currentPage === 34 && currentTime >= line.start && currentTime <= line.end;
          return(
            <span key={i} className={isActive ? "highlight" : ""}>
              {line.text + " "}
            </span>
      );
      })}
      </p>
      ))}
     </section>

      <img src={Image34} alt="Page 34" className="page-image-34" />

      <section className="even">34</section>
    </section>
  );
}

export default Page34;