import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {placesListType} from "../prop-types.js";
import Main from "../main/main.jsx";
import Offer from "../offer/offer.jsx";

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
            <Offer card={this.props.places[0]} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {places} = this.props;
    const activePlace = this.state.activePlace;

    if (activePlace) {
      return <Offer card={activePlace} />;
    }

    return (
      <Main places={places} onPlaceTitleClick={this._handlePlaceTitleClick} onBookmarkButtonClick={() => {}} />
    );
  }

  _handlePlaceTitleClick(place) {
    this.setState({activePlace: place});
  }
}

App.propTypes = {
  places: placesListType
};

export default App;
