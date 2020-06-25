import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {placesListType} from "../prop-types";
import PlaceCard from "../place-card/place-card.jsx";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {activeCard: null};

    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
    this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);
  }

  render() {
    const {places, onPlaceTitleClick, onBookmarkButtonClick} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {places.map((card) => {
          return (
            <PlaceCard
              key={card.id}
              card={card}
              events={{
                onPlaceTitleClick,
                onBookmarkButtonClick,
                onCardMouseEnter: this._handleCardMouseEnter,
                onCardMouseLeave: this._handleCardMouseLeave
              }}
            />
          );
        })}
      </div>
    );
  }

  _handleCardMouseEnter(card) {
    this.setState({activeCard: card});
  }

  _handleCardMouseLeave() {
    this.setState({activeCard: null});
  }
}

PlacesList.propTypes = {
  places: placesListType,
  onPlaceTitleClick: PropTypes.func.isRequired,
  onBookmarkButtonClick: PropTypes.func.isRequired
};

export default PlacesList;
