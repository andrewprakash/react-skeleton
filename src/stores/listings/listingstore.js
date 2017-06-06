import { EventEmitter } from 'events';
import dispatcher from '../flux/dispatcher';
import axios from "axios"

var data = {
    listing: null
}

class ListingStore extends EventEmitter{
    constructor(){
        super()
    }    
    
    handleActions(action){
        switch(action.type){
            
        }
    }
    
}

ListingStore.prototype.getListings= function(){
    axios.get("https://hfh-api-andrew-prakash.c9users.io/v1/listings")
    .then(function(r){
        console.log("response", r.data)
    })
    
    return data
}

ListingStore.prototype.getListing = function(id){
    for(var i = 0; i < data.length; i++){
        if(data[i].id == id){
            return data[i];
        }
    }
}

var _store = new ListingStore();
window.listingstore = _store
dispatcher.register(_store.handleActions.bind(_store))
module.exports = _store;