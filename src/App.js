import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import BandDashboard from "./pages/BandDashboard";
import TopMenu from "./components/TopMenu";

function App() {
    return (
        <Router>
            <TopMenu/>
            <Switch>
                <Route exact path="/">
                    <LoginPage/>
                </Route>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
                <Route path="/band-dashboard">
                    <BandDashboard
                        title="Deze Song"
                    />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
