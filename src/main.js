import React from 'react';
import ReactDOM from 'react-dom'
import Application from "./views/application/application.jsx"; 


window.onload = function(){
    
    ReactDOM.render(<Application/>, document.getElementById("app"));
    
}