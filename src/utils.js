import {PERCENTS_PER_RATING_POINT} from "./const";

const calcRatingBarWidth = (rating) => Math.round(rating) * PERCENTS_PER_RATING_POINT;

const formatDate = (dateString) => new Date(dateString).toLocaleDateString(`en`, {month: `long`, year: `numeric`});

export {calcRatingBarWidth, formatDate};
