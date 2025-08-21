import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image24 from "../Images/Image24.png";
import "../Styles/Page.css";

function Page24(){
  const { currentTime, language } = useContext(MusicContext);

    const transcripts = {
      en: {
      paragraphs: [
  [
    { text: "Khaya knew where Amile was,", start: 69, end: 72 },
    { text: "and she showed Amile’s parents where she was hiding.", start: 73, end: 78 },
    { text: "They found her behind the shed, pouring water onto Thingo’s soil.", start: 79, end: 84 },
  ],
  [
    { text: "“Amile,” her dad sighed,", start: 85, end: 87 },
    { text: "“what are you doing?", start: 88, end: 90 },
    { text: "We told you that saving water is important.", start: 91, end: 93 },
    { text: "You can’t waste it on this thing.", start: 94, end: 96 },
  ],
   [
    { text: "“But…I’m not wasting water!”", start: 97, end: 99 },
    { text: "Amile shouted. “Thingo is my friend.”", start: 100, end: 102 },
  ],
   [
    { text: "“Your friend?” said Khaya", start: 103, end: 105 },
    { text: "eyes narrowed with her arms across her chest.", start: 106, end: 108 },
  ]
      ]
},
      zu: {
      paragraphs: [
  [
    { text: "UKhaya bekazi ukuthi uAmile ukuphi,", start: 69, end: 72 },
    { text: "futhi wakhombisa abazali bakaAmile lapho ayecashe khona.", start: 73, end: 78 },
    { text: "Bamthola ethela amanzi enhlabathini kaThingo.", start: 79, end: 84 },
  ],
    [
    { text: "“Amile,” kusho ubab’ wakhe,", start: 85, end: 87 },
    { text: "“wenzani? Sakutshela ukuthi ukonga amanzi kubalulekile.", start: 88, end: 90 },
    { text: "Awukwazi ukuwachitha kulokhula.” ", start: 91, end: 93 },
  ],
    [
    { text: "“Kodwa...akuwona ukhula!” kusho uAmile ememeza.", start: 97, end: 99 },
    { text: "“UThingo ungumngane wami.”", start: 100, end: 102 },
  ],
  [
    { text: "“UMngane wakho?” kusho uKhaya, ubuso bumuncu.", start: 103, end: 105 },
  ]
]
    }
};
    const { paragraphs } = transcripts[language];

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