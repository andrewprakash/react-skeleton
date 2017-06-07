import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom';
import { Provider } from "react-redux"

import Application from "./views/application/application.jsx";
import store from "./store/store.js"

window.onload = function(){
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <Application />
            </BrowserRouter>
        </Provider>,
        document.getElementById("app"));
}
