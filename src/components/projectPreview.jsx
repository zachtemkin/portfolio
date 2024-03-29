import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import "./projectPreview.scss";

const ProjectPreview = (props) => {
  return (
    <article key={props.id} className='project-preview row'>
      <section className='project-preview__project-info mobile-col-12 tablet-col-5'>
        <h2 className='project-preview__project-title'>
          <Link className='project-preview__project-link' to={props.slug}>
            {props.title}
          </Link>
        </h2>
        <p className='project-preview__team'>{props.team}</p>
        <p className='project-preview__time-frame'>{props.time_frame}</p>
        <ul className='project-preview__tags'>
          {props.tags.map((item) => (
            <li className='tag h5'>{item.tag}</li>
          ))}
        </ul>
      </section>
      <Link
        to={props.slug}
        className='image-container mobile-col-12 tablet-col-7'>
        <GatsbyImage image={props.hero_image} />
      </Link>
    </article>
  );
};

ProjectPreview.propTypes = {
  id: PropTypes.string,
  slug: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  team: PropTypes.string,
  time_frame: PropTypes.string,
  hero_image: PropTypes.object,
  tags: PropTypes.array,
  theme_color: PropTypes.string,
};

export default ProjectPreview;
