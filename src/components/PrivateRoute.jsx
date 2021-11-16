import React, { Component } from "react";
import LoginDialog from "../components/loginDialog";
import { setAuthStateObservers } from "../services/auth";

const Checking = () => {
  return (
    <div className='private-route__loader'>
      <i className='fal fa-spin fa-spinner' />
      checking...
    </div>
  );
};

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authState: "checking",
    };
    setAuthStateObservers(
      () => {
        this.setState({ authState: "loggedIn" });
      },
      () => {
        this.setState({ authState: "loggedOut" });
      }
    );
  }

  render() {
    const { component: PathComponent, location, ...rest } = this.props;

    if (this.state.authState === "loggedOut") {
      return <LoginDialog redirectPath={location.pathname} />;
    }

    if (this.state.authState === "checking") {
      return <Checking />;
    }

    if (this.state.authState === "loggedIn") {
      return <PathComponent {...rest} />;
    }
  }
}

export default PrivateRoute;
