import {PERCENTS_PER_RATING_POINT} from "./const";

const calcRatingBarWidth = (rating) => Math.round(rating) * PERCENTS_PER_RATING_POINT;

const formatDate = (dateString) => new Date(dateString).toLocaleDateString(`en`, {month: `long`, year: `numeric`});

const getComponentDisplayName = (component) => component.displayName || component.name || `Component`;

const getLocations = (places, activePlace) => places.map((place) => ({location: place.location, active: place === activePlace}));

export {calcRatingBarWidth, formatDate, getComponentDisplayName, getLocations};
