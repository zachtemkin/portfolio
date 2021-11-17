import React, { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, navigate } from "gatsby";
import classnames from "classnames";
import { AuthContext } from "../context/auth";
import { auth } from "../utils/firebase";
import PropTypes from "prop-types";

import "./loginDialog.scss";

const LoginDialog = (props) => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorIsVisible, setErrorIsVisible] = useState(false);

  const { setUser } = useContext(AuthContext);

  const handleChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        process.env.GATSBY_FIREBASE_USER_EMAIL,
        password
      );
      setUser(result.user);
      navigate(props.redirectPath);
    } catch (err) {
      console.log(err.message);
      setErrorMessage(err.message);
      setErrorIsVisible(true);
    }
  };

  return (
    <div className='login-dialog page__main-content'>
      <div className='login-dialog__screen row'>
        <div className='login-dialog__content tablet-col-7 tablet-col-offset-4 mobile-col-12'>
          <h2>Password Required</h2>
          <p className='login-dialog__message h3'>
            I’ve tried to keep some of my projects annonymous and open to the
            public, but in this case I can't.
          </p>
          <p>
            If you received a password for this site, enter it here and
            continue.
          </p>
          <form className='login-dialog__input-box'>
            <input
              className='login-dialog__input'
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={handleChange}
            />
            <button
              className='login-dialog__submit'
              type='submit'
              onClick={handleSubmit}
              onSubmit={handleSubmit}>
              Submit
            </button>
          </form>
          <p>
            If you'd like to learn more, send me an email at{" "}
            <a
              className='login-dialog__email-link'
              href={`mailto:zachtemkin@gmail.com?subject=Password to view projects on your site`}>
              zachtemkin@gmail.com
            </a>
          </p>
          <p
            className={classnames("login-dialog__error-message", {
              "error-message--is-visible": errorIsVisible === true,
              "error-message--not-visible": errorIsVisible === false,
            })}>
            {errorMessage}
          </p>
          <Link className='login-dialog__return-button' to='/'>
            Return to Work
          </Link>
        </div>
      </div>
    </div>
  );
};

LoginDialog.propTypes = {
  redirectPath: PropTypes.string,
};

export default LoginDialog;
