import React from "react";
import PropTypes from "prop-types";
import {placeListType} from "../prop-types.js";
import FavoriteCard from "../favorite-card/favorite-card.jsx";

const FavoriteList = (props) => {
  const {places, cities} = props;
  return (
    <ul className="favorites__list">
      {cities.map((city) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {places.filter((place) => place.city.name === city).map((place) => (
              <FavoriteCard key={place.id} card={place} />
            ))}
            <article className="favorites__card place-card">
            </article>
          </div>
        </li>
      ))}
    </ul>
  );
};

FavoriteList.propTypes = {
  places: placeListType,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default FavoriteList;
