import React, { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import Image24 from "../Images/Image24.png";
import "../Styles/Page.css";

function Page24(){
    const { currentTime } = useContext(MusicContext);

    const transcript = [
  [
    { text: "", start: 0, end: 3 },
    { text: "", start: 4, end: 9 },
  ],
  [
    { text: "", start: 10, end: 12 },
    { text: "", start: 13, end: 15 },
    { text: "", start: 16, end: 18 },
  ]
];
  
  return(
    <section className="page">
      <section className="page-text">
      <p>Khaya knew where Amile was, and she showed Amile’s parents where she was hiding. 
       They found her behind the shed, pouring water onto Thingo’s soil.</p>

      <p><q>Amile,</q> her dad sighed, <q>what are you doing? We told you that saving water 
       is important. You can’t waste it on this thing.</q></p>

      <p><q>But…I’m not wasting water!</q> Amile shouted. <q>Thingo is my friend.</q></p>

      <p><q>Your friend?</q> said Khaya eyes narrowed, and arms across her chest.</p>
    </section>

    <section className="page-text">
    {transcript.map((paragraph, pIndex) => (
    <p key={pIndex}>
      {paragraph.map((line, i) => {
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