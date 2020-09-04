import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Post from './Post';
import Profile from './Profile';


const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}></Route>
                <Route path="/post" component={Post}></Route>
                <Route path="/profile" component={Profile}></Route>
            </div>
        </BrowserRouter>
    )
}

export default Routing;
