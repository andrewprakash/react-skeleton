import { EventEmitter } from 'events';
import dispatcher from '../flux/dispatcher'

class ApplicationStore extends EventEmitter{
    constructor(){
        super()
        this.items = {
            value: "hello world"
        }
    }
    handleActions(action){
        switch (action.type) {
            case 'CLICK_BUTTON':
                checkForClick(action)
                break;
        }
    }
    checkStore(){
        return this.items
    }
}

function checkForClick(action){
    _store.emit("changed", {value: "hello world"})
}    
var _store = new ApplicationStore();
dispatcher.register(_store.handleActions.bind(_store))
module.exports = _store