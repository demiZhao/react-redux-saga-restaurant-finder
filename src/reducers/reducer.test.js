import reducer from "./index";

describe('REDUCER', () => {
  it('should handle "RESTAURANTS_RECEIVED" action', () => {
    const mockData = [{
      "name": "Scaramouche Restaurant",
      "address": "1 Benvenuto Place",
      "city": "Toronto",
    }];
    expect(reducer({ restaurants: [], loading: false, filter: '' }, { type: "RESTAURANTS_RECEIVED", json: mockData }))
      .toEqual({ restaurants: mockData, loading: false, filter:'' })
  })
 })
