import React, {Fragment} from "react";
import PropTypes from "prop-types";
import withReviewFormHandler from "../../hocs/with-review-form-handler/with-review-form-handler";

const RATING_TITLES = [`perfect`, `good`, `not bad`, `badly`, `terribly`];

const ReviewForm = (props) => {
  const {rating, comment, isInvalid, isDisabled, onSubmit, onRatingChange, onCommentChange} = props;
  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          RATING_TITLES.map((title, index) => {
            const value = RATING_TITLES.length - index;
            const id = `${value}-star${value > 1 ? `s` : ``}`;
            return (
              <Fragment key={id}>
                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  value={`${value}`}
                  id={id}
                  type="radio"
                  checked={value === rating}
                  disabled={isDisabled}
                  onChange={onRatingChange}
                />
                <label
                  htmlFor={id}
                  className="reviews__rating-label form__rating-label"
                  title={title}
                >
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </Fragment>
            );
          })
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        disabled={isDisabled}
        onChange={onCommentChange}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled || isInvalid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  isInvalid: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onCommentChange: PropTypes.func.isRequired
};

export {ReviewForm};
export default withReviewFormHandler(ReviewForm);
