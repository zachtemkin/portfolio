import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import {
  navLinks,
  navLinkItem,
  navLinkText,
  siteHeader,
  mainNav,
  logoContainer,
} from "./siteHeader.module.scss";

const SiteHeader = (props) => {
  return (
    <div className={siteHeader}>
      <div to='/' className={logoContainer}>
        <Link to='/'>
          <svg
            height='100%'
            viewBox='0 0 179 110'
            preserveAspectRatio='xMinYMin meet'>
            <path
              d='M0 0v71.078l34.056-30.102 2.73 3.043L0 76.533V110h97.973V47.04L63.918 77.144 61.186 74.1l40.892-36.146V110h44.184V42.09H179V0H0z'
              fill={props.themeColor ? props.themeColor : "#127658"}
              fill-rule='evenodd'
            />
          </svg>
        </Link>
      </div>
      <nav className={mainNav}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to='/' className={navLinkText}>
              Work
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/' className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/' className={navLinkText}>
              Personal Projects
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

SiteHeader.propTypes = {
  siteTitle: PropTypes.string,
  themeColor: PropTypes.string,
};

export default SiteHeader;
