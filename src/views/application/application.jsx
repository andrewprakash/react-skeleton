import React from 'react';
import Header from "./header.jsx"; 
import viewstore from '../../stores/view/viewstore'
import dbstore from '../../stores/db/dbstore'
import dispatcher from '../../stores/flux/dispatcher'
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router'

/**
 * 
 * All View Components declarations added here
 * so that it can be dynamically rendered to the parent app component
 * 
**/
require('../home/home.jsx')
require('../about/about.jsx')

var Application = React.createClass({
    getInitialState(){
      return({
          view: null
      })
    },
    
    componentDidMount(){
        var self = this;
        viewstore.on('change_view', self.handleViewChange);
        dbstore.on('application_db_ready', self.getInitView)  
        dispatcher.dispatch({
            type: "SETUP_DB",
            data: {}
        })
    },
    componentWillUnmount(){
        var self = this;
        viewstore.removeListener('change_view', self.handleViewChange);
        dbstore.removeListener('application_db_ready', self.getInitView)   
    },
    
    getInitView(){
        var self = this;
        self.setState({
          view: viewstore.getInitialView()
        })  
    },
    
    handleViewChange(view){
        var self = this;
        self.setState({
            view: view
        })
    },
    
    buildView(viewInfo){
        var newView = require('../' + viewInfo.module);
        return newView
    },
    
    render(){
        var self = this;
        var view = null;
        var path = null;
        
        if(self.state.view){
            view = self.buildView(self.state.view)
            path = self.state.view.path
        }
        
        return(
            <div>
                <Header />
                <BrowserRouter>
                    <Route path={path} component={view}/>
                </BrowserRouter>
            </div>
        )
    }
})

module.exports = Application;