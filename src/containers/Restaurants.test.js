import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from "redux-mock-store";
import Restaurants from "./Restaurants";
import "../../setupTests";

it('should render correctly <Restaurants>', () => {
    const mockStore = configureStore();
    const store = mockStore({
        restaurants: [{
            "id": 21307,
            "name": "Scaramouche Restaurant",
            "address": "1 Benvenuto Place",
            "city": "Toronto",
        }],
        loading: false,
        filter: ''
    });
    const wrapper = mount(<Provider store={store}><Restaurants /></Provider>);

    expect(wrapper).toMatchSnapshot();
});