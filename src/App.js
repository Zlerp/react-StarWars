import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter , Route, Switch } from "react-router-dom";
import './App.scss';

import Header from './partials/Header/Header';
import Planet from "./pages/childPages/Planet";
import Person from "./pages/childPages/Person";
import Starship from "./pages/childPages/Starship";
import Film from "./pages/childPages/Film";
import People from './pages/People';
import Planets from "./pages/Planets";
import Starships from "./pages/Starships";
import Films from "./pages/Films";
import Vehicles from "./pages/Vehicles";
import Vehicle from "./pages/childPages/Vehicle";
import Species from "./pages/Species";
import Specimen from "./pages/childPages/Specimen";
import Home from "./pages/Home/Home";

const API_URL = "https://swapi.co/api";



function App() {
  return (
  <HashRouter basename="/">
    <div className="App">
        <div className="stars-wrapper">
            <div id='stars' />
            <div id='stars2' />
            <div id='stars3' />
        </div>
      <Header />
      <Switch>

          <Route path="/people/:id" render={({match}) => (
              <Person id={match.params.id} apiUrl={API_URL}/>
          )}/>
          <Route path="/planets/:id" render={({match}) => (
              <Planet id={match.params.id} apiUrl={API_URL}/>
          )}/>
          <Route path="/starships/:id" render={({match}) => (
              <Starship id={match.params.id} apiUrl={API_URL}/>
          )}/>
          <Route path="/vehicles/:id" render={({match}) => (
              <Vehicle id={match.params.id} apiUrl={API_URL}/>
          )}/>
          <Route path="/species/:id" render={({match}) => (
              <Specimen id={match.params.id} apiUrl={API_URL}/>
          )}/>
          <Route path="/films/:id" render={({match}) => (
              <Film id={match.params.id} apiUrl={API_URL}/>
          )}/>






        <Route exact path="/" render={(props) => <Home />} />
        <Route path="/people" render={(props) => <People apiUrl={API_URL}/>} />
        <Route path="/planets" render={(props) => <Planets apiUrl={API_URL}/>} />
        <Route path="/starships" render={(props) => <Starships apiUrl={API_URL}/>} />
        <Route path="/vehicles" render={(props) => <Vehicles apiUrl={API_URL}/>} />
        <Route path="/species" render={(props) => <Species apiUrl={API_URL}/>} />
        <Route path="/films" render={(props) => <Films apiUrl={API_URL}/>} />


      </Switch>
    </div>
  </HashRouter>
  );
}

export default App;
