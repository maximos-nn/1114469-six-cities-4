import React from "react";
import PropTypes from "prop-types";
import {placeCardType} from "../prop-types";

const PERCENTS_PER_RATING_POINT = 20;

const PlaceCard = (props) => {
  const {card, events} = props;
  const {onCardMouseEnter, onCardMouseLeave, onBookmarkButtonClick, onPlaceTitleClick} = events;
  const {title, type, picture, price, rating, isBookmarked, isPremium} = card;
  const bookmarkActiveStyle = isBookmarked ? `place-card__bookmark-button--active` : ``;
  const ratingBarWidth = Math.round(rating) * PERCENTS_PER_RATING_POINT;
  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => onCardMouseEnter(card)}
      onMouseLeave={() => onCardMouseLeave(card)}
    >
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={`img/${picture}`} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{`€${price}`}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${bookmarkActiveStyle}`} type="button" onClick={onBookmarkButtonClick}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingBarWidth}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" onClick={onPlaceTitleClick}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  card: placeCardType,
  events: PropTypes.shape({
    onCardMouseEnter: PropTypes.func.isRequired,
    onCardMouseLeave: PropTypes.func.isRequired,
    onBookmarkButtonClick: PropTypes.func.isRequired,
    onPlaceTitleClick: PropTypes.func.isRequired
  }).isRequired
};

export default PlaceCard;
