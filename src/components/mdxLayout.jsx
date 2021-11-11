import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const MdxLayout = ({ col, offset, children }) => {
  return (
    <div
      className={classnames(
        `page__write-up__chunk tablet-col-${col} tablet-col-offset-${offset} mobile-col-12`
      )}>
      {children}
    </div>
  );
};

MdxLayout.propTypes = {
  col: PropTypes.string,
  offset: PropTypes.string,
};

export default MdxLayout;
