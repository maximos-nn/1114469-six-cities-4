import {PERCENTS_PER_RATING_POINT} from "./const";

const calcRatingBarWidth = (rating) => Math.round(rating) * PERCENTS_PER_RATING_POINT;

export {calcRatingBarWidth};
