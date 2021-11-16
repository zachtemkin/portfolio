import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import "./siteHeader.scss";

const SiteHeader = (props) => {
  return (
    <header className='site-header row'>
      <div to='/' className='logo-container tablet-col-6 mobile-col-12'>
        <Link className='logo' to='/'>
          <svg
            height='100%'
            viewBox='0 0 179 110'
            preserveAspectRatio='xMinYMin meet'>
            <path
              d='M0 0v71.078l34.056-30.102 2.73 3.043L0 76.533V110h97.973V47.04L63.918 77.144 61.186 74.1l40.892-36.146V110h44.184V42.09H179V0H0z'
              fill={props.themeColor ? props.themeColor : "#127658"}
              fillRule='evenodd'
            />
          </svg>
        </Link>
      </div>
      <nav className='main-nav tablet-col-6 mobile-col-12'>
        <ul className='nav-links'>
          <li className='nav-link-item'>
            <Link to='/' className='nav-link-text'>
              Work
            </Link>
          </li>
          <li className='nav-link-item'>
            <Link to='/' className='nav-link-text'>
              About
            </Link>
          </li>
          <li className='nav-link-item'>
            <Link to='/' className='nav-link-text'>
              Personal Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

SiteHeader.propTypes = {
  siteTitle: PropTypes.string,
  themeColor: PropTypes.string,
};

export default SiteHeader;
