import React from "react";
import "./introBlock.scss";
import Resume from "../static/zach_temkin_resume_2021.pdf";

const IntroBlock = () => {
  return (
    <article className='intro-block row'>
      <h1 className='intro-block__heading mobile-col-12 desktop-col-6'>
        Hi, I'm Zach.
      </h1>
      <div className='intro-block__intro-text mobile-col-12 desktop-col-6'>
        <p>
          I'm a designer, and front-end tinkerer living, and working in NYC. I
          love making things, and that's generally the best way I learn about
          the world.
        </p>
        <p>
          I've worked at IBM, and most recently at Visa, where I'm on the
          Digital Partnerships &amp; Fintech Team.
        </p>
        <p>
          {" "}
          Below are a few professional and personal projects. You can also{" "}
          <a
            className='resume-link'
            href={Resume}
            rel='noreferrer'
            target='_blank'>
            Download my Resume
          </a>
        </p>
      </div>
    </article>
  );
};

export default IntroBlock;
