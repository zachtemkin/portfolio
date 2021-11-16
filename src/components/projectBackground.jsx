import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

import "./projectBackground.scss";

const ProjectBackground = (props) => {
  return (
    <section className='background-info'>
      <div className='row'>
        <h2 className='background-header tablet-col-4 mobile-col-12'>
          {props.backgroundHeading}
        </h2>
        <div className='background-text tablet-col-8 mobile-col-12'>
          {props.backgroundText}
        </div>
      </div>
      <div className='hero-image row'>
        <div className='image-container tablet-col-8 mobile-col-12'>
          <GatsbyImage image={props.heroImage} />
        </div>
      </div>
    </section>
  );
};

ProjectBackground.propTypes = {
  heroImage: PropTypes.string,
  backgroundText: PropTypes.string,
  backgroundHeading: PropTypes.string,
};

export default ProjectBackground;
