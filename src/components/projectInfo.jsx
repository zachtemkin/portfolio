import React from "react";
import PropTypes from "prop-types";
import "./projectInfo.scss";

const ProjectInfo = (props) => {
  return (
    <section className='project-info mobile-col-12'>
      <p className='time-frame'>{props.time_frame}</p>
      <p className='team' style={{ color: props.theme_color }}>
        {props.team}
      </p>
      <ul className='tags'>
        {props.tags.map((item) => (
          <li className='tag'>{item.tag}</li>
        ))}
      </ul>
    </section>
  );
};

ProjectInfo.propTypes = {
  team: PropTypes.string,
  time_frame: PropTypes.string,
  tags: PropTypes.array,
  theme_color: PropTypes.string,
};

export default ProjectInfo;
