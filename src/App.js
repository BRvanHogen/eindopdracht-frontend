import React, {useContext} from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import LoginPage from "./pages/login-page/LoginPage";
import Dashboard from "./pages/profile/Dashboard";
import BandDashboard from "./pages/BandDashboard";
import TopMenu from "./components/top-menu/TopMenu";
import SignUpPage from "./pages/signup-page/SignUpPage";
import HomePage from "./pages/home-page/HomePage";
import ProjectsPage from "./pages/projects-page/ProjectsPage";
import Sidebar from "./components/sidebar/Sidebar";
import TestPage from "./pages/test-page/TestPage";
import {AuthContext} from "./context/AuthContext";

function PrivateRoute({children, ...rest}) {
    const {user} = useContext(AuthContext);

    return (
        <Route {...rest}>
            {user ? children : <Redirect to="/sign-in"/>}
        </Route>
    )
}



function App() {
    const {user} = useContext(AuthContext);

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

                {/*user={user} dit hoefde niet eens bij de properties van PrivateRoute? */}
                <PrivateRoute exact path="/profile">
                    <Dashboard/>
                </PrivateRoute>

                <PrivateRoute exact path="/band-dashboard">
                    <BandDashboard
                        title="Deze Song"
                    />
                </PrivateRoute>

                <PrivateRoute exact path="/projects">
                    <ProjectsPage/>
                </PrivateRoute>

                <Route path="/sidebar">
                    <Sidebar/>
                </Route>

                <Route path="/test-page">
                    <TestPage/>
                </Route>

            </Switch>
</>
    );
}

export default App;
