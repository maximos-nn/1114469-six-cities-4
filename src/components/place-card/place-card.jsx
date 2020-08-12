import React from "react";
import PropTypes from "prop-types";
import {placeCardType} from "../prop-types";
import {calcRatingBarWidth} from "../../utils";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";

const PlaceCard = (props) => {
  const {card, events, cardClass, imageWrapperClass} = props;
  const {onCardMouseEnter, onCardMouseLeave, onBookmarkButtonClick} = events;
  const {title, type, picture, price, rating, isBookmarked, isPremium} = card;
  const bookmarkActiveStyle = isBookmarked ? `place-card__bookmark-button--active` : ``;
  const ratingBarWidth = calcRatingBarWidth(rating);
  return (
    <article
      className={`${cardClass} place-card`}
      onMouseEnter={() => onCardMouseEnter(card)}
      onMouseLeave={() => onCardMouseLeave(card)}
    >
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${imageWrapperClass} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={picture} width="260" height="200" alt="Place image" />
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
          <Link to={`${AppRoute.OFFER}/${card.id}`}>{title}</Link>
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
  }).isRequired,
  cardClass: PropTypes.string.isRequired,
  imageWrapperClass: PropTypes.string.isRequired
};

export default PlaceCard;
