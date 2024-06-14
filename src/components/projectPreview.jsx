import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import "./projectPreview.scss";
import ArrowButton from "../images/arrow-button.svg";

const ProjectPreview = (props) => {
  const projectNumber = props.order_index.toString().padStart(2, "0");
  const accentColor = props.accent_color ? props.accent_color : "#48485F";

  return (
    <article key={props.id} className='project-preview'>
      <Link to={props.slug} className='image-container'>
        <GatsbyImage image={props.hero_image} style={{ height: "100%" }} />
      </Link>
      <section className='project-preview__project-info'>
        <p className='project-preview__index' style={{ color: accentColor }}>
          {projectNumber}
        </p>
        <h2 className='project-preview__project-title'>
          <Link
            className='project-preview__project-link'
            to={props.slug}
            style={{ color: accentColor }}>
            {props.title}
          </Link>
        </h2>
        <div className='team-and-timeframe' style={{ color: accentColor }}>
          <p className='project-preview__team'>{props.team}</p>
          <p className='project-preview__time-frame'>{props.time_frame}</p>
        </div>
        <p className='project-preview__blurb'>{props.blurb}</p>
        <Link to={props.slug} className='project-preview__arrow-button'>
          <ArrowButton />
        </Link>
      </section>
    </article>
  );
};

ProjectPreview.propTypes = {
  id: PropTypes.string,
  slug: PropTypes.string,
  type: PropTypes.string,
  index: PropTypes.string,
  title: PropTypes.string,
  team: PropTypes.string,
  time_frame: PropTypes.string,
  hero_image: PropTypes.object,
  tags: PropTypes.array,
  theme_color: PropTypes.string,
  blurb: PropTypes.string,
  accent_color: PropTypes.string,
};

export default ProjectPreview;
