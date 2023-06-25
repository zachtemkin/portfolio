import React from "react";
import "./introBlock.scss";
import Resume from "../static/zach_temkin_resume_2021.pdf";

const IntroBlock = () => {
  return (
    <>
      <article className='intro-block row'>
        <h1 className='intro-block__heading mobile-col-12 desktop-col-6'>
          Hi, I'm Zach.
        </h1>
        <div className='intro-block__intro-text mobile-col-12 desktop-col-6'>
          <p>
            I’m a curious tinkerer, who learns by doing. I like to work on
            projects that present opportunities to think strategically and
            execute nimbly.
          </p>
          <p>
            I currently work on shaping ambiguous opportunities into high-impact
            projects on a a Growth Design team at Visa, in New York.
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
      {/* <hr />
      <article className='intro-block row'>
        <div className='intro-block__heading mobile-col-12 desktop-col-6'>
          <h2>A bit about being a desginer at Visa</h2>
          <p>
            Lots of people think that Visa is a credit card company, but similar
            to how Uber doesn’t own cars, and airbnb doesn’t own properties,
            Visa doesn’t actually issue any cards.
          </p>
          <p>
            Historically, Visa has been “the plumbing” that allowed credit cards
            to work at the scale we’re all familiar with today, but the goal for
            the last several years has been to position Visa as a platform for
            banks and fintechs to build and innovate on.
          </p>
        </div>
        <div className='intro-block__intro-text mobile-col-12 desktop-col-6'>
          <p>
            This has posed some cool opportunities and some tricky challenges as
            a designer. On one hand, we are uniquely positioned within the
            broader finance and fintech ecosystem to understand trends, consumer
            needs, and the needs of businesses within the world of finance. But
            on the other hand, we don’t ultimately build the end products that
            people interact with. We can exert influence on the ecosystem but
            it’s hard to have direct impact.
          </p>
          <p>
            The various roles that I’ve been in at Visa have been in large part
            focused on ways to move the ecosystem (banks, fintech’s, big-tech’s
            and merchants) in new directions that we think are better for the
            people at the other end. and ultimately better for the future of
            Visa as a business.
          </p>
          <p>
            So beyond product and ux design, many projects I’ve worked on have
            given me opportunities to engage with border corporate and ecosystem
            strategy.
          </p>
        </div>
      </article> */}
    </>
  );
};

export default IntroBlock;
