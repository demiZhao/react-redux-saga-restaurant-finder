const initialState = { restaurants: [], loading: false, filter: '' };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_RESTAURANTS':
      return { ...state, filter: '', loading: true };
    case 'RESTAURANTS_RECEIVED':
      return { ...state, restaurants: action.json, loading: false };
    case 'SET_FILTER':
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};

export default reducer;
