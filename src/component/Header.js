import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/post">Post</Link></li>
            <li><Link to="/profile">Profile</Link></li>
        </ul>
        )
}


export default Header;