import { EventEmitter } from 'events';
import dispatcher from '../flux/dispatcher'

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
    if(viewFlow[action.data].module !== currentView.module){
        currentView = viewFlow[action.data]
        _store.emit("change_view", viewFlow[action.data])
    }
}

var currentView = null;

var viewFlow = {
    home:{
        module: 'home/home.jsx',
        hash: 'home'
    },
    about:{
        module: 'about/about.jsx',
        hash: 'about'
    },
    contact:{
        module: 'contact/contact.jsx',
        hash: 'contact'
    }
}

var _store = new ViewStore();
dispatcher.register(_store.handleActions.bind(_store))
module.exports = _store;