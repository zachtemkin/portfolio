import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./mdxScreenContainer.scss";

const MdxScreenContainer = ({ col, offset, color, children }) => {
  const numChildren = children.length;

  return (
    <div
      style={{ backgroundColor: color }}
      className={classnames(
        `page__write-up__chunk mdx-screen-container tablet-col-${col} tablet-col-offset-${offset} mobile-col-12`
      )}>
      {numChildren >= 1 ? (
        children.map((child) => (
          <div
            style={{
              width: `calc(((100% / ${numChildren})) - 1rem)`,
            }}
            className='image-child'>
            {child}
          </div>
        ))
      ) : (
        <div className='image-child'>{children}</div>
      )}
    </div>
  );
};

MdxScreenContainer.propTypes = {
  col: PropTypes.string,
  offset: PropTypes.string,
};

export default MdxScreenContainer;
