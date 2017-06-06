import { EventEmitter } from 'events';
import dispatcher from '../flux/dispatcher';
import axios from "axios"

var data = {
    listings: []
}

class ListingStore extends EventEmitter{
    constructor(){
        super()
    }    
    
    handleActions(action){
        switch(action.type){
            case 'GET_LISTING':
                getListing(action)
                break;
        }
    }
}

ListingStore.prototype.getListing = function(id){
    for(var i = 0; i < data.listings.length; i++){
        if(data.listings[i].id == id){
            return data.listings[i];
        }
    }
}

function getListing(action){
    axios.get("https://hfh-api-andrew-prakash.c9users.io/v1/listings")
    .then(function(r){
        data.listings = r.data;
        _store.emit("listings", r.data)
    })
}

var _store = new ListingStore();
window.listingstore = _store
dispatcher.register(_store.handleActions.bind(_store))
module.exports = _store;