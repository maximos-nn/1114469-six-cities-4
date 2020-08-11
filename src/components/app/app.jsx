import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {placeListType, placeCardType} from "../prop-types.js";
import {connect} from "react-redux";
import Main from "../main/main.jsx";
import Offer from "../offer/offer.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import {getCurrentPlaces, getCurrentCityName} from "../../reducers/data/selectors";
import {getCurrentPlace} from "../../reducers/ui/selectors";
import {ActionCreator} from "../../reducers/ui/ui";
import SignIn from "../sign-in/sign-in.jsx";

const MainWithActiveItem = withActiveItem(Main);

const renderApp = (appProps) => {
  const {places, city, currentPlace, onPlaceTitleClick} = appProps;

  if (currentPlace) {
    return (
      <Offer
        card={currentPlace}
      />
    );
  }

  return (
    <MainWithActiveItem places={places} city={city} onPlaceTitleClick={onPlaceTitleClick} onBookmarkButtonClick={() => {}} />
  );
};

const App = (props) => {
  const {places} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {renderApp(props)}
        </Route>
        <Route exact path="/dev-offer">
          {
            places.length ?
              <Offer
                card={places[0]}
              />
              : ``
          }
        </Route>
        <Route exact path="/dev-signin">
          <SignIn />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  places: placeListType,
  city: PropTypes.string.isRequired,
  currentPlace: PropTypes.oneOfType([placeCardType]),
  onPlaceTitleClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    places: getCurrentPlaces(state),
    city: getCurrentCityName(state),
    currentPlace: getCurrentPlace(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onPlaceTitleClick(place) {
    dispatch(ActionCreator.changePlace(place));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
