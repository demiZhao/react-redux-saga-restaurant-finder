import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from "redux-mock-store";
import SearchForm from "./SearchForm";
import "../../setupTests";

it('should render correctly <SearchForm> component', () => {
    const mockStore = configureStore();
    const store = mockStore({});
    const wrapper = mount(<Provider store={store}><SearchForm /></Provider>);

    expect(wrapper).toMatchSnapshot();
});