import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image24 from "../Images/Image24.png";
import "../Styles/Page.css";

function Page24(){
  const { currentTime, language } = useContext(MusicContext);

    const transcripts = [
  [
    { text: "Khaya knew where Amile was,", start: 0, end: 3 },
    { text: "and she showed Amile’s parents where she was hiding.", start: 4, end: 9 },
    { text: "They found her behind the shed, pouring water onto Thingo’s soil.", start: 4, end: 9 },
  ],
  [
    { text: "“Amile,” her dad sighed,", start: 10, end: 12 },
    { text: "“what are you doing?", start: 13, end: 15 },
    { text: "We told you that saving water is important.", start: 16, end: 18 },
    { text: "You can’t waste it on this thing.", start: 19, end: 21 },
  ],
   [
    { text: "“But…I’m not wasting water!”", start: 10, end: 12 },
    { text: "Amile shouted. “Thingo is my friend.”", start: 13, end: 15 },
  ],
   [
    { text: "“Your friend?” said Khaya", start: 10, end: 12 },
    { text: "eyes narrowed with her arms across her chest.", start: 13, end: 15 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "", start: 0, end: 3 },
    { text: "", start: 4, end: 9 },
    { text: "", start: 10, end: 12 },
  ],
  [
    { text: "", start: 13, end: 15 },
    { text: "", start: 16, end: 18 },
  ]
]
    }
};

  const transcript = transcripts[language];

  return(
    <section className="page">
    <section className="page-text">
    {paragraphs.map((para, pIndex) => (
    <p key={pIndex}>
      {para.map((line, i) => {
        const isActive = currentTime >= line.start && currentTime <= line.end;
        return (
          <span key={i} className={isActive ? "highlight" : ""}>
            {line.text + " "}
          </span>
        );
      })}
    </p>
    ))}
   </section>

    <img src={Image24} alt="Page 24" className="page-image" />

      <section className="page-24">24</section>
    </section>
  );
}

export default Page24;