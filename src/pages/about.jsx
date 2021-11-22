import * as React from "react";
import Page from "../components/page";
import Resume from "../static/zach_temkin_resume_2021.pdf";

const AboutPage = () => {
  return (
    <Page className='about-page' pageTitle='Zach Temkin | About Me'>
      <main className='row'>
        <div className='tablet-col-6 mobile-col-12'>
          <h2>Hi! I'm Zach. I'm a designer, living in NYC.</h2>
          <a
            className='resume-link'
            href={Resume}
            rel='noreferrer'
            target='_blank'>
            Download my Resume
          </a>
        </div>
        <div className='tablet-col-6 mobile-col-12'>
          <p>
            I'm a designer with a knack for coding and a deep understanding of
            business practices. Currently on the Digital Partnerships &amp;
            Fintech team at Visa, I work to bring new Visa-powered payment
            experiences to life for existing and potential clients, and to help
            define Visa’s strategic vision for digital experiences in the
            future.
          </p>
          <p>
            In my role, I work with stakeholders across Visa's senior
            leadership, as well as with clients, and partners to deliver designs
            and prototypes for clear and delightful experiences that address
            complex user needs.
          </p>
        </div>
      </main>
    </Page>
  );
};

export default AboutPage;
