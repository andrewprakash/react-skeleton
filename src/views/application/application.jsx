import React from 'react';
import dbstore from '../../stores/db/dbstore'
import dispatcher from '../../stores/flux/dispatcher'
import {Route, Switch} from 'react-router-dom'

/**
 * 
 * All View Components declarations added here
 * so that it can be dynamically rendered to the parent app component
 * 
**/


import Header from "./header.jsx"; 
import Home from "../home/home.jsx";
import About from "../about/about.jsx";
import Cars from "../cars/cars.jsx";
import CarsDetails from "../cars/carsdetail.jsx"

class Application extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            view: null
        }
    }
    
    componentDidMount(){
        var self = this;

    }
    componentWillUnmount(){
        var self = this;
    }
    
    render(){
        
        return(
            <div>
                <Header/>
                <Switch>
                    <Route path='/cars/:id' component={CarsDetails}/>
                    <Route path='/cars' component={Cars} />
                    <Route path='/about' component={About} />
                    <Route path='/' component={Home} />
                </Switch>
            </div>
        )
    }
}

module.exports = Application;