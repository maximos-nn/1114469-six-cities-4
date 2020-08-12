import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {placeListType} from "../prop-types.js";
import Header from "../header/header.jsx";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";
import {Operation as DataOperation} from "../../reducers/data/data";
import {getFavorites, getFavoriteCities} from "../../reducers/data/selectors.js";
import {connect} from "react-redux";
import FavoritesEmpty from "../favorites-empty/favorites-empty.jsx";
import FavoriteList from "../favorite-list/favorite-list.jsx";

class Favorites extends PureComponent {
  componentDidMount() {
    this.props.onLoadFavorites();
  }

  render() {
    const {places, cities} = this.props;
    if (!places.length) {
      return <FavoritesEmpty />;
    }
    return (
      <div className="page">
        <Header />

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoriteList places={places} cities={cities} />
            </section>
          </div>
        </main>
        <footer className="footer container">
          <Link to={AppRoute.ROOT} className="footer__logo-link">
            <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </Link>
        </footer>
      </div>
    );
  }
}

Favorites.propTypes = {
  places: placeListType,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLoadFavorites: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  places: getFavorites(state),
  cities: getFavoriteCities(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavorites: () => dispatch(DataOperation.loadFavorites())
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
