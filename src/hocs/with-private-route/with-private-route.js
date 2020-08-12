import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {getAuthenticationStatus} from "../../reducers/user/selectors.js";

const withPrivateRoute = (Component, authStatus, path) => {
  const WithPrivateRoute = (props) => {
    const {userStatus} = props;
    return userStatus === authStatus
      ? <Component {...props} />
      : <Redirect to={path} />;
  };

  WithPrivateRoute.propTypes = {
    userStatus: PropTypes.string.isRequired,
  };

  const mapStateToProps = (state) => {
    return {
      userStatus: getAuthenticationStatus(state),
    };
  };

  return connect(mapStateToProps)(WithPrivateRoute);
};

export default withPrivateRoute;
