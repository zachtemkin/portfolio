import React from "react";
import { introBlock, heading, introText } from "./introBlock.module.scss";

const IntroBlock = () => {
  return (
    <article className={introBlock}>
      <h1 className={heading}>Zach Temkin, Designer</h1>

      <p className={introText}>
        I'm a designer with a knack for coding and a deep understanding of
        business practices. Currently on the Digital Partnerships &amp; Fintech
        team at Visa, I work to bring new Visa-powered payment experiences to
        life for existing and potential clients, and to help define Visa’s
        strategic vision for digital experiences in the future.
      </p>
      <p className={introText}>
        In my role, I work with stakeholders across Visa's senior leadership, as
        well as with clients, and partners to deliver designs and prototypes for
        clear and delightful experiences that address complex user needs.
      </p>
    </article>
  );
};

export default IntroBlock;
