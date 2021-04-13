import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import BandDashboard from "./pages/BandDashboard";
import TopMenu from "./components/TopMenu";
import SignUpPage from "./pages/SignUpPage";


function App() {
    return (
        <>
            <TopMenu/>
            <Switch>
                <Route path="/sign-up">
                    <SignUpPage/>
                </Route>
                <Route path="/sign-in">
                    <LoginPage/>
                </Route>
                <Route path="/profile">
                    <Dashboard/>
                </Route>
                <Route path="/band-dashboard">
                    <BandDashboard
                        title="Deze Song"
                    />
                </Route>
            </Switch>
</>
    );
}

export default App;
