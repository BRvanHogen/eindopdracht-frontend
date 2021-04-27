import React from 'react';
import './App.css';
import {Switch, Route,} from 'react-router-dom';
import LoginPage from "./pages/login-page/LoginPage";
import Dashboard from "./pages/Dashboard";
import BandDashboard from "./pages/BandDashboard";
import TopMenu from "./components/top-menu/TopMenu";
import SignUpPage from "./pages/signup-page/SignUpPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/projects-page/ProjectsPage";
import Sidebar from "./components/sidebar/Sidebar";


function App() {
    return (
        <>
            <TopMenu/>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
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
                <Route path="/projects">
                    <ProjectsPage/>
                </Route>
                <Route path="/sidebar">
                    <Sidebar/>
                </Route>
            </Switch>
</>
    );
}

export default App;
