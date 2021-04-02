import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
      <LoginPage/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
