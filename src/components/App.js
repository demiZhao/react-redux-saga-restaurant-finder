import React from 'react';
import SearchForm from '../containers/SearchForm';
import Restaurants from '../containers/Restaurants'
import Loading from '../containers/Loading'
import './App.css';

let App = () => (
  <React.Fragment>
    <h1>Search Restaurant</h1>
    <div className="flex-container">
      <SearchForm />
      <Loading />
      <Restaurants />
    </div>
  </React.Fragment>
);

export default App;
