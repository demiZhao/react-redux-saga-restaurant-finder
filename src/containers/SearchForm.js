import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getRestaurants, setFilter } from '../actions'

const SearchForm = ({ filter, getRestaurants, setFilter }) => {
  const [city, setCity] = useState("");
  const [param, setParam] = useState(filter);
  useEffect(() => {
    setParam(filter)
  }, [filter])

  return (
    <React.Fragment>
      <div className="city">
        <input
          type="text"
          aria-label="search"
          placeholder="Type city to search here"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <button
          onClick={() => getRestaurants(city)}
        >Search</button>
      </div>
      <div className="filter">
        <input
          type="text"
          aria-label="refine"
          placeholder="Type name/ address/ area to refine search"
          value={param}
          onChange={e => setParam(e.target.value)}
        />
        <button
          onClick={() => setFilter(param)}
        >Apply</button>
      </div>
    </React.Fragment>
  )
}

const mapDispatchToProps = (dispatch) => ({
  getRestaurants: (city) => dispatch(getRestaurants(city)),
  setFilter: (filter) => dispatch(setFilter(filter))
})

const mapStateToProps = state => ({
  filter: state.filter
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

