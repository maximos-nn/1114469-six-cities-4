import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {placeListType} from "../prop-types.js";
import Map from "../map/map.jsx";
import MainPlaceList from "../main-place-list/main-place-list.jsx";
import CityList from "../city-list/city-list.jsx";
import NoPlaces from "../no-places/no-places.jsx";
import Sort from "../sort/sort.jsx";
import {SortType} from "../../const.js";
import {getLocations} from "../../utils";
import withToggle from "../../hocs/with-toggle/with-toggle.js";

const MAP_CLASS_NAME = `cities__map`;

const SortWithToggle = withToggle(Sort);

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeSortType: SortType.POPULAR,
      activeCard: null
    };
    this._sortCaptions = Object.values(SortType);

    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
    this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);

    const {onPlaceTitleClick, onBookmarkButtonClick} = props;
    this._cardEvents = {
      onPlaceTitleClick,
      onBookmarkButtonClick,
      onCardMouseEnter: this._handleCardMouseEnter,
      onCardMouseLeave: this._handleCardMouseLeave
    };
  }

  render() {
    const {places, city} = this.props;
    const count = places.length || ``;
    const markers = getLocations(places, this.state.activeCard);

    return (
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className={`page__main page__main--index${count ? `` : ` page__main--index-empty`}`}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <CityList />
          </div>
          <div className="cities">
            <div className={`cities__places-container${count ? `` : ` cities__places-container--empty`} container`}>
              {
                count ?
                  <section className="cities__places places">
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">{`${count} places to stay in ${city}`}</b>
                    <SortWithToggle
                      types={this._sortCaptions}
                      activeType={this.state.activeSortType}
                      onTypeChange={this._handleSortTypeChange}
                    />
                    <MainPlaceList
                      places={places}
                      sortType={this.state.activeSortType}
                      events={this._cardEvents}
                    />
                  </section>
                  : <NoPlaces city={city} />
              }
              <div className="cities__right-section">
                {
                  count &&
                  <Map mapClass={MAP_CLASS_NAME} markers={markers} />
                }
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  _handleSortTypeChange(type) {
    this.setState({activeSortType: type});
  }

  _handleCardMouseEnter(card) {
    this.setState({activeCard: card});
  }

  _handleCardMouseLeave() {
    this.setState({activeCard: null});
  }
}

Main.propTypes = {
  places: placeListType,
  city: PropTypes.string.isRequired,
  onPlaceTitleClick: PropTypes.func.isRequired,
  onBookmarkButtonClick: PropTypes.func.isRequired
};

export default Main;
