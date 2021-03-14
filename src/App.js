import './App.css';
import React from 'react';
import Nav from './components/Nav/Nav'
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";



const App = () => {
    return (
        <div className='app-wrapper'>
            <div className="app-wrapper-header">
                <HeaderContainer />
            </div>
            <Nav />
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={ () => <DialogsContainer /> }/>

                <Route path='/profile/:userId?'
                       render={ () => <ProfileContainer /> }/>

                <Route path='/users'
                       render={ () => <UsersContainer /> }/>

                <Route path='/login'
                       render={ () => <LoginPage /> }/>


            </div>
        </div>
    )
}

export default App;
