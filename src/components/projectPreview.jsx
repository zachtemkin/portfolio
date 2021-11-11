import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import "./projectPreview.scss";

const ProjectPreview = (props) => {
  return (
    <article key={props.id} className='project-preview row'>
      <div className='image-container mobile-col-12 tablet-col-6'>
        <GatsbyImage image={props.hero_image} />
      </div>
      <section className='project-preview__project-info mobile-col-12 tablet-col-6'>
        <p className='project-preview__team h5'>{props.team}</p>
        <p className='project-preview__time-frame h5'>{props.time_frame}</p>
        <h2 className='project-preview__project-title'>
          <Link
            className='project-preview__project-link'
            to={`/work/${props.type}/${props.slug}`}>
            {props.title}
          </Link>
        </h2>
        <ul className='project-preview__tags'>
          {props.tags.map((item) => (
            <li className='tag h5'>{item.tag}</li>
          ))}
        </ul>
      </section>
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
