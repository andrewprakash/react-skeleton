import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Application from "./views/application/application.jsx";

window.onload = function(){
    ReactDOM.render(
        
        <BrowserRouter>
            <Application />
        </BrowserRouter>,
        document.getElementById("app"));
}
