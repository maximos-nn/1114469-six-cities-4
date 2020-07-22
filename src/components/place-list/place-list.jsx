import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {placeListType} from "../prop-types";
import PlaceCard from "../place-card/place-card.jsx";

class PlaceList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {activeCard: null};

    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
    this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);
  }

  render() {
    const {places, onPlaceTitleClick, onBookmarkButtonClick, listClass, cardClass, imageWrapperClass} = this.props;
    return (
      <div className={`${listClass} places__list`}>
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
              cardClass={cardClass}
              imageWrapperClass={imageWrapperClass}
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

PlaceList.propTypes = {
  places: placeListType,
  onPlaceTitleClick: PropTypes.func.isRequired,
  onBookmarkButtonClick: PropTypes.func.isRequired,
  listClass: PropTypes.string.isRequired,
  cardClass: PropTypes.string.isRequired,
  imageWrapperClass: PropTypes.string.isRequired
};

export default PlaceList;
