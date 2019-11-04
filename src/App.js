import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import People from './pages/People';
import Planets from "./pages/Planets";
import Starships from "./pages/Starships";
import Header from './partials/Header/Header';
import Planet from "./pages/childPages/Planet";

const API_URL = "https://swapi.co/api";



function App() {
  return (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <People apiUrl={API_URL}/>} />
        <Route path="/planets/:id" render={({match}) => (
            <Planet
                id={match.params.id} apiUrl={API_URL}
            />
        )}/>
        <Route path="/planets" render={(props) => <Planets apiUrl={API_URL}/>} />
        <Route path="/starships" render={(props) => <Starships apiUrl={API_URL}/>} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
