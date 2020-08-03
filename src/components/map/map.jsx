import React, {PureComponent, createRef} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {getCurrentPlaces} from "../../utils";

const DEFAULT_ZOOM = 12;

const getLocations = (places, activePlace) => places.map((place) => ({location: place.location, active: place === activePlace}));

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = createRef();
    this._map = null;
    this._markerGroup = null;

    this._icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    this._activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });
  }

  componentDidMount() {
    const {location, zoom} = this.props;

    const map = leaflet.map(
        this._mapRef.current,
        {
          center: location,
          zoom,
          zoomControl: false,
          marker: true
        }
    );
    this._map = map;
    map.setView(location, zoom);
    leaflet.tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        }
    ).addTo(map);

    this._markerGroup = leaflet.layerGroup().addTo(map);
    this._addMarkers();
  }

  componentWillUnmount() {
    this._map.remove();
    this._map = null;
    this._markerGroup = null;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this._map.flyTo(this.props.location);
    }
    this._markerGroup.clearLayers();
    this._addMarkers();
  }

  render() {
    const {mapClass} = this.props;
    return (
      <section ref={this._mapRef} className={`${mapClass} map`}></section>
    );
  }

  _addMarkers() {
    const {markers} = this.props;
    markers.forEach((marker) => leaflet.marker(marker.location, {icon: marker.active ? this._activeIcon : this._icon}).addTo(this._markerGroup));
  }
}

Map.propTypes = {
  markers: PropTypes.arrayOf(
      PropTypes.shape({
        location: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
        active: PropTypes.bool.isRequired
      }).isRequired
  ).isRequired,
  mapClass: PropTypes.string.isRequired,
  location: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  zoom: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  location: state.currentCity.location,
  zoom: state.currentCity.zoom || DEFAULT_ZOOM,
  markers: getLocations(getCurrentPlaces(state), ownProps.activeItem)
});

export {Map};
export default connect(mapStateToProps)(Map);
