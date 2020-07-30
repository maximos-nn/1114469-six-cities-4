import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import CityLink from "../city-link/city-link.jsx";
import {ActionCreator} from "../../reducer";

const CityList = (props) => {
  const {cities, activeCity, onCityLinkClick} = props;
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <CityLink
            key={city}
            active={city === activeCity}
            city={city}
            onClick={onCityLinkClick}
          />
        ))}
      </ul>
    </section>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeCity: PropTypes.string.isRequired,
  onCityLinkClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  cities: [...state.cityOffers.keys()],
  activeCity: state.currentCity.name
});

const mapDispatchToProps = (dispatch) => ({
  onCityLinkClick(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

export {CityList};
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
