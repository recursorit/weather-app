import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Select from './Select';
import ByCityName from './ByCityName';
import ByCityId from './ByCityId';
import ByCityCoordinates from './ByCityCoordinates';
import Weather from './Weather';


function App({weatherData}) {


  return (
    <Router>
      <Container className='selector mt-5'>
        <Switch>
          <Route path='/' exact>
            <Select />
          </Route>
          <Route path='/cityName/:city' component={ByCityName}>
          </Route>
          <Route path='/cityId/:cityId' component={ByCityId}>
          </Route>
          <Route path='/cityCoordinates/:cityCoordinates' component={ByCityCoordinates}>
          </Route>
          <Route path='/cityZipCode/:cityZipCode' component={ByCityId}>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

