import React from "react";
import {reviewType} from "../prop-types";
import {calcRatingBarWidth, formatDate} from "../../utils";

const Review = (props) => {
  const {review} = props;
  const {rating, comment, user} = review;
  const {name, avatar} = user;
  const date = new Date(review.date);
  const ratingBarWidth = calcRatingBarWidth(rating);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${ratingBarWidth}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date.toISOString()}>{formatDate(date)}</time>
      </div>
    </li>
  );
};

Review.propTypes = {review: reviewType};

export default Review;
