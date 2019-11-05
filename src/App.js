import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import People from './pages/People';
import Planets from "./pages/Planets";
import Starships from "./pages/Starships";
import Header from './partials/Header/Header';
import Planet from "./pages/childPages/Planet";
import Person from "./pages/childPages/Person";
import Starship from "./pages/childPages/Starship";

const API_URL = "https://swapi.co/api";



function App() {
  return (
  <Router>
    <div className="App">
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


        <Route exact path="/" render={(props) => <People apiUrl={API_URL}/>} />


        <Route path="/planets" render={(props) => <Planets apiUrl={API_URL}/>} />
        <Route path="/starships" render={(props) => <Starships apiUrl={API_URL}/>} />


      </Switch>
    </div>
  </Router>
  );
}

export default App;
