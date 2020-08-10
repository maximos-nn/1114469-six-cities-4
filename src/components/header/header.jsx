import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAuthenticationStatus, getEmail} from "../../reducers/user/selectors";
import {AuthenticationStatus} from "../../reducers/user/user";

const Header = (props) => {
  const {isMain, userStatus, email} = props;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {
              isMain ?
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </a>
                :
                <a className="header__logo-link" href="main.html">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </a>
            }
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {
                    userStatus === AuthenticationStatus.AUTH ?
                      <span className="header__user-name user__name">{email}</span>
                      :
                      <span className="header__login">Sign in</span>
                  }
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isMain: PropTypes.bool,
  userStatus: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  userStatus: getAuthenticationStatus(state),
  email: getEmail(state)
});

export {Header};
export default connect(mapStateToProps)(Header);
