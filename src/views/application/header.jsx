import React from 'react';
import {Link} from 'react-router-dom'

class Header extends React.Component{
    
    
    render(){
        var self = this;
        
        return(
            <div id="header">
                <ul className="header-list">
                    <li className="header-list-item">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="header-list-item">
                        <Link to='/about'>About</Link>
                    </li>
                    <li className="header-list-item">
                        <Link to='/listings'>Listings</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

module.exports = Header;