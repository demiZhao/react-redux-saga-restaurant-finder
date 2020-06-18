import { put, takeLatest } from 'redux-saga/effects';
import { fetchRestaurants, actionWatcher } from './index'

describe('SAGAS', () => {
  it('should dispatch action "GET_RESTAURANTS" ', () => {
    const generator = actionWatcher();

    expect(generator.next().value).toEqual(takeLatest('GET_RESTAURANTS', fetchRestaurants));
    expect(generator.next().done).toBeTruthy();
  })

  it('should dispatch action "RESTAURANTS_RECEIVED" with result from fetch RESTAURANTS API', () => {
    const mockResponse = { "restaurants": [{ "id": 21307}] };
    const generator = fetchRestaurants('toronto');
    generator.next();

    expect(generator.next(mockResponse).value)
      .toEqual(put({ type: "RESTAURANTS_RECEIVED", json: [{ "id": 21307}] }));
    expect(generator.next().done).toBeTruthy();
  })

})
