import { EventEmitter } from 'events';
import dispatcher from '../flux/dispatcher';
import axios from 'axios';

class ViewStore extends EventEmitter{
    constructor(){
        super()
    }
    
    handleActions(action){
        switch(action.type){
            case 'GO_NEXT':
                goNextView(action)
                break;
        }
    }
    
    getInitialView(){
        currentView = viewFlow.home
        return viewFlow.home
    }
    
    getCurrentView(){
        return currentView;
    }
    
}


function goNextView(action){
    if(viewFlow[action.data] !== undefined){
        if(viewFlow[action.data].module !== currentView.module){
            currentView = viewFlow[action.data]
            _store.emit("change_view", viewFlow[action.data])
        }
    }else{
        console.error("View requested could not be found")
    }
}

var currentView = null;

// Add all view components below

var viewFlow = {
    home:{
        module: 'home/home.jsx',
        path: ''
    },
    about:{
        module: 'about/about.jsx',
        path:'about'
    }
}

var _store = new ViewStore();
dispatcher.register(_store.handleActions.bind(_store))
module.exports = _store;