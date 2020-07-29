import React from "react";
import PropTypes from "prop-types";

const Sort = (props) => {
  const {types, activeType, onTypeChange, toggle, onToggle} = props;
  const listOpenedClass = toggle ? ` places__options--opened` : ``;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0" onClick={onToggle}>
        {activeType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${listOpenedClass}`}>
        {types.map((caption) => {
          return (
            <li
              key={caption}
              className={`places__option${activeType === caption ? ` places__option--active` : ``}`}
              tabIndex="0"
              onClick={() => {
                onToggle();
                onTypeChange(caption);
              }}
            >
              {caption}
            </li>
          );
        })}
      </ul>

      {/* <select className="places__sorting-type" id="places-sorting">
        <option className="places__option" value="popular" selected="">Popular</option>
        <option className="places__option" value="to-high">Price: low to high</option>
        <option className="places__option" value="to-low">Price: high to low</option>
        <option className="places__option" value="top-rated">Top rated first</option>
      </select> */}

    </form>
  );
};


Sort.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeType: PropTypes.string.isRequired,
  onTypeChange: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default Sort;
