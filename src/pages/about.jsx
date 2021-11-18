import * as React from "react";
import Page from "../components/page";
import Resume from "../static/zach_temkin_resume_2021.pdf";

const AboutPage = () => {
  return (
    <Page pageTitle='Zach Temkin | About Me'>
      <main className='row'>
        <h1 className='tablet-col-10 mobile-col-12'>
          Hi! I'm Zach. I'm a designer, and general tinker-er living in NYC.
        </h1>
        <h2 className='green tablet-col-10 mobile-col-12'>
          I'm currently a designer at Visa, on the Digital Partnerships team
        </h2>
        <a
          className='resume-link tablet-col-8 mobile-col-12'
          href={Resume}
          rel='noreferrer'
          target='_blank'>
          Download my Resume
        </a>
      </main>
    </Page>
  );
};

export default AboutPage;
