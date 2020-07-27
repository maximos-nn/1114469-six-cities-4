import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {placeListType, reviewListType} from "../prop-types.js";
import {connect} from "react-redux";
import Main from "../main/main.jsx";
import Offer from "../offer/offer.jsx";
import nearbyPlaces from "../../mocks/offers";

const MAX_REVIEW_COUNT = 10;
const MAX_NEARBY_PLACE_COUNT = 3;

const sortByDate = (items) => items.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
const sortReviews = (reviews) => sortByDate(reviews);
const limitReviews = (reviews) => sortReviews(reviews).slice(0, MAX_REVIEW_COUNT);
const limitNearbyPlaces = (places) => places.slice(0, MAX_NEARBY_PLACE_COUNT);

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {activePlace: null};

    this._handlePlaceTitleClick = this._handlePlaceTitleClick.bind(this);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-offer">
            <Offer
              card={this.props.places[0]}
              reviews={limitReviews(this.props.reviews)}
              nearbyPlaces={limitNearbyPlaces(nearbyPlaces)}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {places, reviews, city} = this.props;
    const activePlace = this.state.activePlace;

    if (activePlace) {
      return (
        <Offer
          card={activePlace}
          reviews={limitReviews(reviews)}
          nearbyPlaces={limitNearbyPlaces(nearbyPlaces)}
        />
      );
    }

    return (
      <Main places={places} city={city} onPlaceTitleClick={this._handlePlaceTitleClick} onBookmarkButtonClick={() => {}} />
    );
  }

  _handlePlaceTitleClick(place) {
    this.setState({activePlace: place});
  }
}

App.propTypes = {
  places: placeListType,
  reviews: reviewListType,
  city: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({places: state.cityOffers.get(state.currentCity), city: state.currentCity});

export {App};
export default connect(mapStateToProps)(App);
