import React from "react";
import { Link } from "gatsby";
import "./postNavigation.scss";

const PostNavigation = ({ prevPost, nextPost }) => {
  return (
    <nav className='post-nav row'>
      <ul className='post-nav__links col-12'>
        <li className='post-nav__link-item'>
          <Link className='post-nav__link-text' to='/'>
            Return Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PostNavigation;
