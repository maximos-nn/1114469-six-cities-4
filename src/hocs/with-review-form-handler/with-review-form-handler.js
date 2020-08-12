import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const CommentLength = {
  MIN: 50,
  MAX: 300
};

const withReviewFormHandler = (Component) => {
  class WithReviewFormHandler extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: 0,
        comment: ``,
        isInvalid: true,
        isDisabled: false
      };

      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleCommentChange = this._handleCommentChange.bind(this);
    }

    render() {
      const {rating, comment, isInvalid, isDisabled} = this.state;
      return (
        <Component
          {...this.props}
          rating={rating}
          comment={comment}
          isInvalid={isInvalid}
          isDisabled={isDisabled}
          onSubmit={this._handleSubmit}
          onRatingChange={this._handleRatingChange}
          onCommentChange={this._handleCommentChange}
        />
      );
    }

    _handleSubmit(evt) {
      evt.preventDefault();

      const {rating, comment, isInvalid} = this.state;
      const {onReviewPost} = this.props;

      if (isInvalid) {
        return;
      }

      this.setState({isDisabled: true});
      onReviewPost({rating, comment})
        .then(() => {
          this.setState({
            rating: 0,
            comment: ``,
            isInvalid: true,
            isDisabled: false
          });
        })
        .catch((error) => {
          this.setState({isDisabled: false});
          // eslint-disable-next-line no-alert
          alert(error);
        });
    }

    _handleRatingChange(evt) {
      this.setState({rating: Number(evt.target.value)}, this._validateForm);
    }

    _handleCommentChange(evt) {
      this.setState({comment: evt.target.value}, this._validateForm);
    }

    _validateForm() {
      const {rating, comment} = this.state;
      const commentLen = comment.length;

      if (commentLen < CommentLength.MIN || commentLen > CommentLength.MAX || !rating) {
        this.setState({isInvalid: true});
        return;
      }
      this.setState({isInvalid: false});
    }
  }

  WithReviewFormHandler.propTypes = {
    onReviewPost: PropTypes.func.isRequired
  };

  return WithReviewFormHandler;
};

export default withReviewFormHandler;
