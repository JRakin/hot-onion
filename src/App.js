import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Food from './Component/Food/Food';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Search from './Component/Search/Search';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header></Header>
          <Search></Search>
          <Food></Food>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
