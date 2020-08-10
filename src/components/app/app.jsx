import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {placeListType, reviewListType, placeCardType} from "../prop-types.js";
import {connect} from "react-redux";
import Main from "../main/main.jsx";
import Offer from "../offer/offer.jsx";
import mockNearbyPlaces from "../../mocks/offers";
import mockReviews from "../../mocks/reviews";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import {getCurrentPlaces, getCurrentCityName} from "../../reducers/data/selectors";
import {getCurrentPlace} from "../../reducers/ui/selectors";
import {ActionCreator} from "../../reducers/ui/ui";
import SignIn from "../sign-in/sign-in.jsx";

const MAX_REVIEW_COUNT = 10;
const MAX_NEARBY_PLACE_COUNT = 3;

const MainWithActiveItem = withActiveItem(Main);

const sortByDate = (items) => items.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
const sortReviews = (reviews) => sortByDate(reviews);
const limitReviews = (reviews) => sortReviews(reviews).slice(0, MAX_REVIEW_COUNT);
const limitNearbyPlaces = (places) => places.slice(0, MAX_NEARBY_PLACE_COUNT);

const renderApp = (appProps) => {
  const {places, reviews, city, currentPlace, onPlaceTitleClick, nearbyPlaces} = appProps;

  if (currentPlace) {
    return (
      <Offer
        card={currentPlace}
        reviews={reviews}
        nearbyPlaces={nearbyPlaces}
      />
    );
  }

  return (
    <MainWithActiveItem places={places} city={city} onPlaceTitleClick={onPlaceTitleClick} onBookmarkButtonClick={() => {}} />
  );
};

const App = (props) => {
  const {places, reviews, nearbyPlaces} = props;
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
                reviews={reviews}
                nearbyPlaces={nearbyPlaces}
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
  reviews: reviewListType,
  city: PropTypes.string.isRequired,
  currentPlace: PropTypes.oneOfType([placeCardType]),
  onPlaceTitleClick: PropTypes.func.isRequired,
  nearbyPlaces: placeListType
};

const mapStateToProps = (state) => {
  return {
    places: getCurrentPlaces(state),
    city: getCurrentCityName(state),
    currentPlace: getCurrentPlace(state),
    reviews: limitReviews(mockReviews),
    nearbyPlaces: limitNearbyPlaces(mockNearbyPlaces)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onPlaceTitleClick(place) {
    dispatch(ActionCreator.changePlace(place));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
