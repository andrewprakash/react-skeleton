import React from 'react';
import viewstore from '../../stores/view/viewstore'
import Header from "./header.jsx"; 

/**
 * 
 * All View Components
 * 
**/
require('../home/home.jsx')

var Application = React.createClass({
    getInitialState(){
      return({
          view: viewstore.getInitialView()
      })
    },
    componentDidMount(){
        var self = this;
        viewstore.on('change_view', self.handleViewChange)
    },
    componentWillUnmount(){
        var self = this;
        viewstore.removeListener('change_view', self.handleViewChange)
    },
    
    
    handleViewChange(view){
        var self = this;
        self.setState({
            view: view
        })
    },
    
    buildView(viewInfo){
        var newView = require('../' + viewInfo.module);
        return React.createElement(newView, viewInfo)
    },
    
    render(){
        var self = this;
        var view = null;
        
        if(self.state.view){
            view = self.buildView(self.state.view)
        }
        
        return(
            <div>
                <Header />
                <div>
                    {view}
                </div>
            </div>
        )
    }
})

module.exports = Application;