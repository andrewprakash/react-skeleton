import { EventEmitter } from 'events';
import dispatcher from '../flux/dispatcher';
import axios from "axios"

var data = [
            {
                id: 1,
                name: "Toyota"
            },
            {
                id: 2,
                name: "Mazda"
            },
            {
                id: 3,
                name: "Nissan"
            }
        ] 

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
    axios.get("http://104.236.253.245:3000/v1/listings")
    .then(function(r){
        console.log("response", r)
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