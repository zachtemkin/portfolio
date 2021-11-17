import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, navigate } from "gatsby";
import { AuthContext } from "../context/auth";
import { auth } from "../utils/firebase";
// import { handleLogin } from "../services/auth";

const LoginDialog = (props) => {
  const [password, setPassword] = useState("");

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
    }
  };

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
              value={password}
              onChange={handleChange}
            />
            <button
              className='login-dialog__submit'
              type='submit'
              onClick={handleSubmit}
              onSubmit={handleSubmit}>
              Submitt
            </button>
          </form>
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
