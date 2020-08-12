import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {placeCardType, reviewListType, placeListType} from "../prop-types";
import Map from "../map/map.jsx";
import NearbyPlaceList from "../nearby-place-list/nearby-place-list.jsx";
import ReviewList from "../review-list/review-list.jsx";
import Header from "../header/header.jsx";
import {calcRatingBarWidth} from "../../utils";
import {Operation as DataOperation} from "../../reducers/data/data";
import {getSortedReviews, getNearbyPlaces, getPlaceById} from "../../reducers/data/selectors";
import {getAuthenticationStatus} from "../../reducers/user/selectors";
import {AuthenticationStatus} from "../../reducers/user/user";

const MAX_PHOTOS_COUNT = 6;
const MAP_CLASS_NAME = `property__map`;

class Offer extends PureComponent {
  componentDidMount() {
    const {card, onReviewsLoad, onNearbyPlacesLoad} = this.props;
    onReviewsLoad(card.id);
    onNearbyPlacesLoad(card.id);
  }

  componentDidUpdate(prevProps) {
    const {card, onReviewsLoad} = this.props;
    const {id: prevId} = prevProps.card;
    if (card.id !== prevId) {
      onReviewsLoad(card.id);
    }
  }

  render() {
    const {card, reviews, nearbyPlaces, onReviewPost, userStatus} = this.props;
    const {
      title,
      type,
      price,
      rating,
      isBookmarked,
      isPremium,
      guests,
      bedrooms,
      description,
      amenities,
      host,
      photos
    } = card;
    const bookmarkActiveStyle = isBookmarked ? `property__bookmark-button--active` : ``;
    const ratingBarWidth = calcRatingBarWidth(rating);
    const hostProStyle = host.isSuper ? `property__avatar-wrapper--pro` : ``;

    return (
      <div className="page">
        <Header />

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {photos.slice(0, MAX_PHOTOS_COUNT).map((photo, i) => {
                  return (
                    <div key={photo + i} className="property__image-wrapper">
                      <img className="property__image" src={photo} alt="Place photo" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {
                  isPremium &&
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                }
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <button className={`property__bookmark-button ${bookmarkActiveStyle} button`} type="button">
                    {/* Copy-paste mistake in styles (property.scss, line 124).
                        "place-card__bookmark-icon" added to fix
                     */}
                    <svg className="property__bookmark-icon place-card__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${ratingBarWidth}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {`${bedrooms} Bedrooms`}
                  </li>
                  <li className="property__feature property__feature--adults">
                    {`Max ${guests} adults`}
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">{`€${price}`}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {amenities.map((amenity, i) => {
                      return (
                        <li key={amenity + i} className="property__inside-item">
                          {amenity}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper ${hostProStyle} user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={host.avatar} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <ReviewList
                  reviews={reviews}
                  isPostingAllowed={userStatus === AuthenticationStatus.AUTH}
                  onReviewPost={(review) => onReviewPost(card.id, review)}
                />
              </div>
            </div>
            <Map mapClass={MAP_CLASS_NAME} places={nearbyPlaces.concat(card)} activeItem={card} />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <NearbyPlaceList places={nearbyPlaces} onBookmarkButtonClick={() => {}} />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

Offer.propTypes = {
  card: placeCardType,
  reviews: reviewListType,
  nearbyPlaces: placeListType,
  onReviewsLoad: PropTypes.func.isRequired,
  onNearbyPlacesLoad: PropTypes.func.isRequired,
  onReviewPost: PropTypes.func.isRequired,
  userStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  card: getPlaceById(state, parseInt(ownProps.match.params.id, 10)),
  reviews: getSortedReviews(state),
  nearbyPlaces: getNearbyPlaces(state),
  userStatus: getAuthenticationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onReviewsLoad: (offerId) => dispatch(DataOperation.loadReviews(offerId)),
  onNearbyPlacesLoad: (offerId) => dispatch(DataOperation.loadNearbyOffers(offerId)),
  onReviewPost: (offerId, review) => dispatch(DataOperation.postReview(offerId, review))
});

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
