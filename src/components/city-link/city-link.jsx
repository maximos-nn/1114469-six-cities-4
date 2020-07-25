import React from "react";
import PropTypes from "prop-types";

const CityLink = (props) => {
  const {active, city, onClick} = props;

  if (active) {
    return (
      <li className="locations__item">
        <a className="locations__item-link tabs__item  tabs__item--active">
          <span>{city}</span>
        </a>
      </li>
    );
  }

  return (
    <li className="locations__item">
      <a
        className="locations__item-link tabs__item"
        href="#"
        onClick={(evt) => {
          evt.preventDefault();
          onClick(city);
        }}
      >
        <span>{city}</span>
      </a>
    </li>
  );
};

CityLink.propTypes = {
  active: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CityLink;
