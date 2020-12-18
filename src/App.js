import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper-header">
                <Header/>
            </div>
        <div className='app-wrapper'>
            <Nav/>
            <div className="app-wrapper-content">
                <Route path='/dialogs'
                       render={() => <DialogsContainer

                       />}/>
                <Route path='/profile'
                       render={() => <Profile

                       />}/>

                <Route path='/news'
                       render={() => <News

                       />}/>
                <Route path='/music'
                       render={() => <Music

                       />}/>
                <Route path='/settings'
                       render={() => <Settings

                       />}/>
            </div>
        </div>
        </BrowserRouter>

)
    ;
}

export default App;

