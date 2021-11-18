import React from "react";
import "./introBlock.scss";

const IntroBlock = () => {
  return (
    <article className='intro-block row'>
      <h1 className='intro-block__heading mobile-col-12 tablet-col-5 desktop-col-6'>
        Zach Temkin, Design&shy;er
      </h1>
      <div className='intro-block__intro-text mobile-col-12 tablet-col-7 desktop-col-6'>
        <p className=''>
          I'm a designer with a knack for coding and a deep understanding of
          business practices. Currently on the Digital Partnerships &amp;
          Fintech team at Visa, I work to bring new Visa-powered payment
          experiences to life for existing and potential clients, and to help
          define Visa’s strategic vision for digital experiences in the future.
        </p>
        <p className=''>
          In my role, I work with stakeholders across Visa's senior leadership,
          as well as with clients, and partners to deliver designs and
          prototypes for clear and delightful experiences that address complex
          user needs.
        </p>
      </div>
    </article>
  );
};

export default IntroBlock;
