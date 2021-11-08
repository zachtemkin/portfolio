import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  projectPreview,
  projectInfo,
  imageContainer,
  projectTitle,
  projectLink,
  team,
  timeFrame,
  tags,
  tag,
} from "./projectPreview.module.scss";

const ProjectPreview = (props) => {
  return (
    <article key={props.id} className={projectPreview}>
      <div className={imageContainer}>
        <GatsbyImage
          image={props.hero_image}
          loading='eager'
          placeholder='blurred'
        />
      </div>
      <section className={projectInfo}>
        <p className={timeFrame}>{props.time_frame}</p>
        <p className={team}>{props.team}</p>
        <h2 className={projectTitle}>
          <Link
            className={projectLink}
            to={`/work/${props.type}/${props.slug}`}>
            {props.title}
          </Link>
        </h2>
        <ul className={tags}>
          {props.tags.map((item) => (
            <li className={tag}>{item.tag}</li>
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
};

export default ProjectPreview;
