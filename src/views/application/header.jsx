import React from 'react';
import dispatcher from '../../stores/flux/dispatcher'
import {Link} from 'react-router-dom'

var Header = React.createClass({
    
    showView(view){
        dispatcher.dispatch({
            type: "GO_NEXT",
            data: view
        })
    },
    
    
    render(){
        var self = this;
        
        return(
            <div id="header">
                <ul className="header-list">
                    <li onClick={() => self.showView('home')} className="header-list-item">Home</li>
                    <li onClick={() => self.showView('about')} className="header-list-item">About</li>
                </ul>
            </div>
        )
    }
})

module.exports = Header;