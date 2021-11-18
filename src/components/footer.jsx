import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='row'>
        <p className='footer__copywrite tablet-col-6 mobile-col-12'>
          &copy; 2021 – Zach Temkin
        </p>
        <nav className='footer__nav tablet-col-6 mobile-col-12'>
          <ul className='footer__links'>
            <li className='footer__link-item'>
              <a
                href='mailto:zachtemkin@gmail.com'
                className='footer__link-text'>
                Email
              </a>
            </li>
            <li className='footer__link-item'>
              <a
                href='https://www.linkedin.com/in/zachtemkin/'
                target='_blank'
                rel='noreferrer'
                className='footer__link-text'>
                LinkedIn
              </a>
            </li>
            <li className='footer__link-item'>
              <a
                href='https://www.instagram.com/zachtemkin/'
                target='_blank'
                rel='noreferrer'
                className='footer__link-text'>
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
