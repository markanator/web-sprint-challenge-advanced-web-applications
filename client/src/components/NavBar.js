import React from 'react';
import {Link} from 'react-router-dom';


function NavBar () {
    return (
        <div className='navbar'>
            <ul>
                <li>
                    <Link to="/">Login</Link>
                </li>
                <li>
                    <Link to="/protected">Protected Page</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;