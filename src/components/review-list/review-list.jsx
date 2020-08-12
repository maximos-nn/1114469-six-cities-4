import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review.jsx";
import {reviewListType} from "../prop-types";
import ReviewForm from "../review-form/review-form.jsx";

const ReviewList = (props) => {
  const {reviews, isPostingAllowed, onReviewPost} = props;
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      {
        reviews.length &&
        <ul className="reviews__list">
          {reviews.map((review) => <Review key={review.id} review={review} />)}
        </ul> || ``
      }
      {
        isPostingAllowed &&
        <ReviewForm onReviewPost={onReviewPost} />
      }
    </section>
  );
};

ReviewList.propTypes = {
  reviews: reviewListType,
  isPostingAllowed: PropTypes.bool.isRequired,
  onReviewPost: PropTypes.func.isRequired
};

export default ReviewList;
