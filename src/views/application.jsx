import React from 'react';
import ApplicationStore from '../stores/application/applicationstore'
import dispatcher from '../stores/flux/dispatcher'


var Application = React.createClass({
    getInitialState(){
        return({
            value: ApplicationStore.checkStore()
        })
    },
    componentDidMount(){
        ApplicationStore.on('changed', this.changeRecieved) 
    },
    changeRecieved(data){
        console.log("data recieved from emit", data)
    },
    buttonClickedEvent(e){
        dispatcher.dispatch({
            type: "CLICK_BUTTON",
            data: {
                value: "hello world"
            }
        })
    },
    render(){
        
        return(
            <div>
                <button onClick={this.buttonClickedEvent}>Button</button>
            </div>
        )
    }
})

module.exports = Application;