import React from "react";
import PropTypes from "prop-types";
import "./projectInfo.scss";

const ProjectInfo = (props) => {
  return (
    <section className='page__project-info row'>
      <div className='page__project-title-container mobile-col-12 tablet-col-8'>
        <h1 className='page__project-title'>{props.title}</h1>
      </div>
      <div className='mobile-col-12 tablet-col-4'>
        <p className='page__time-frame'>{props.time_frame}</p>
        <p className='page__team'>{props.team}</p>
        <ul className='page__tags'>
          {props.tags.map((item) => (
            <li className='tag'>{item.tag}</li>
          ))}
        </ul>
        <p className='page__role'>Role: {props.role}</p>
      </div>
    </section>
  );
};

ProjectInfo.propTypes = {
  title: PropTypes.string,
  team: PropTypes.string,
  role: PropTypes.string,
  time_frame: PropTypes.string,
  tags: PropTypes.array,
  theme_color: PropTypes.string,
};

export default ProjectInfo;
