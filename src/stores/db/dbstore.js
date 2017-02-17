import { EventEmitter } from 'events';
import dispatcher from '../flux/dispatcher';

var _db = null;
var _dbVersion = 28

var DBStores = [
    {
        Name: "Car",
        Options:{autoIncrement: true}
    }
    ]

class DBStore extends EventEmitter{
    constructor(){
        super()
    }    
    
    handleActions(action){
        switch(action.type){
            case 'SETUP_DB':
                openDB(action)
                break;
        }
    }
    
}

function openDB(){
    var openRequest = indexedDB.open("REACT", _dbVersion);
    openRequest.onupgradeneeded = upgradeNeeded;
    openRequest.onsuccess = success
    openRequest.onerror = error;
}

function upgradeNeeded(e){
    var newDb = e.target.result;
    createStores(newDb)
}

function success(e){
    _db = e.target.result
    console.log("New DB Created", _db)
    _store.emit("application_db_ready")
}

function error(e){
    console.log("there was an error")
}

DBStore.prototype.getObjectStore = function(objectStore){
    try{
        return(Promise.resolve(_db.transaction([objectStore], "readwrite"))
            .then(function(transaction){
                return transaction
            })
            .then(function(transaction){
                return Promise.resolve(transaction.objectStore(objectStore))
            })
        )
    }catch(e){
        console.log("there was an error retrieving the requested db",e)
    }
    
}


function createStores(newDb){
    for(var i = 0; i < DBStores.length; i++){
        var options = {}
        if(!newDb.objectStoreNames.contains(DBStores[i].Name)){
            options = DBStores[i].Options
            newDb.createObjectStore(DBStores[i].Name, options)
        }
    }
}

var _store = new DBStore();
window.dbstore = _store
dispatcher.register(_store.handleActions.bind(_store))
module.exports = _store;