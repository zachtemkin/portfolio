import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link, navigate } from "gatsby";
import classnames from "classnames";
import { handleLogin } from "../services/auth";

const LoginDialog = (props) => {
  const [password, setPassword] = useState("");
  const [checkingLogin, setCheckingLogin] = useState(false);
  const [position, setPosition] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState("");

  const inputRef = useRef(null);

  const onSuccess = (userInfo) => {
    setCheckingLogin(false);
    setPassword("");
    navigate(props.redirectPath);
  };

  const onFailure = (error) => {
    // console.error(error.message, error.code);
    setErrorMessage(error.message);
    setPassword("");
    setCheckingLogin(false);
    console.log("failure");
  };

  const submitLogin = () => {
    handleLogin(password, onSuccess, onFailure);
  };

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <div>
      <div className='login-dialog__screen'>
        <div className='login-dialog__content'>
          <h4 className='invert monospace'>Password Required</h4>
          <p className='invert'>
            I’ve worked hard to keep most of my site's content open to the
            public, but sometimes it’s just not possible.
          </p>
          <p className='invert'>
            If you received a password for this site, enter it here and keep on
            browsing.
          </p>
          <form className='login-dialog__input-box'>
            <input
              className='login-dialog__input'
              type='password'
              name='password'
              placeholder='password'
              ref={inputRef}
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <button
              className='login-dialog__submit'
              type='submit'
              onClick={submitLogin}
              onSubmit={submitLogin}>
              Submitt
            </button>
          </form>
          <p className='caption invert login-dialog__status-message'>
            {errorMessage}
          </p>
          <Link to='/'>Return to Work</Link>
        </div>
      </div>
    </div>
  );
};

LoginDialog.propTypes = {
  redirectPath: PropTypes.string,
};

export default LoginDialog;
