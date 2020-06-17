export const getRestaurants = (city) => ({
  type: 'GET_RESTAURANTS',
  city
});

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  filter
});