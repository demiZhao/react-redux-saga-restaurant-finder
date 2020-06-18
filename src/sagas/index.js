import { put, takeLatest, all } from 'redux-saga/effects';

export function* fetchRestaurants(action) {

  const json = yield fetch(`http://opentable.herokuapp.com/api/restaurants?city=${action.city}`)
    .then(response => response.json());

  yield put({ type: "RESTAURANTS_RECEIVED", json: json.restaurants || [{ error: json.message }] });
}

export function* actionWatcher() {
  yield takeLatest('GET_RESTAURANTS', fetchRestaurants)
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
