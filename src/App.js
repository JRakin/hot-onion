import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './Component/DashBoard/Dashboard';
import FoodItemDetails from './Component/FoodItemDetails/FoodItemDetails';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/foodItemDetails/:id">
            <Header></Header>
            <FoodItemDetails></FoodItemDetails>
          </Route>
          <Route path="/dashboard">
            <Header></Header>
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
