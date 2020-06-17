import React from 'react';
import { connect } from 'react-redux'

let Restaurants = ({ list }) => (
    list && list.length > 0 ? (<ul className="list">
      {list.map(item => <li key={item.id}>
        <span>{item.name}</span>
        <span>{item.address}</span>
        <span>{item.area}</span>
      </li>)}
    </ul>) :
    null
  )
 
const mapStateToProps = (state) => ({
  list: getList(state),
})

export const getList = (state) => {
  const { filter, restaurants } = state;
  return restaurants.filter(item => item.name.includes(filter) || item.address.includes(filter) || item.area.includes(filter))
}

export default connect(
  mapStateToProps,
  null
)(Restaurants);


