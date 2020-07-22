import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {placeListType} from "../prop-types";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = createRef();
  }

  componentDidMount() {
    const {places} = this.props;

    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;

    const map = leaflet.map(
        this._mapRef.current,
        {
          center: city,
          zoom,
          zoomControl: false,
          marker: true
        }
    );
    map.setView(city, zoom);
    leaflet.tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        }
    ).addTo(map);

    places.forEach((place) => leaflet.marker(place.location, {icon}).addTo(map));
  }

  render() {
    const {mapClass} = this.props;
    return (
      <section ref={this._mapRef} className={`${mapClass} map`}></section>
    );
  }
}

Map.propTypes = {
  places: placeListType,
  mapClass: PropTypes.string.isRequired
};

export default Map;
