import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router, Redirect} from "react-router-dom";
import {placeListType} from "../prop-types.js";
import {connect} from "react-redux";
import Main from "../main/main.jsx";
import Offer from "../offer/offer.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import {getCurrentPlaces, getCurrentCityName} from "../../reducers/data/selectors";
import SignIn from "../sign-in/sign-in.jsx";
import history from "../../history.js";
import {AppRoute} from "../../const.js";
import Favorites from "../favorites/favorites.jsx";
import withPrivateRoute from "../../hocs/with-private-route/with-private-route.js";
import {AuthenticationStatus} from "../../reducers/user/user.js";

const MainWithActiveItem = withActiveItem(Main);

const App = (props) => {
  const {places, city} = props;
  const SignInPrivate = withPrivateRoute(SignIn, AuthenticationStatus.NO_AUTH, AppRoute.ROOT);
  const FavoritesPrivate = withPrivateRoute(Favorites, AuthenticationStatus.AUTH, AppRoute.SIGNIN);
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainWithActiveItem places={places} city={city} onBookmarkButtonClick={() => {}} />
        </Route>
        <Route exact path={AppRoute.SIGNIN} component={SignInPrivate} />
        <Route
          exact
          path={`${AppRoute.OFFER}/:id`}
          component={Offer}
        />
        <Route exact path={AppRoute.FAVORITES} component={FavoritesPrivate} />
        <Redirect to={`/`} />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  places: placeListType,
  city: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    places: getCurrentPlaces(state),
    city: getCurrentCityName(state)
  };
};

export {App};
export default connect(mapStateToProps)(App);
