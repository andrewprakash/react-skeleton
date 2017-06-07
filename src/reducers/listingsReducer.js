export default function reducer(state={
        listings:{
            name: null,
            description: null
        }
    },action){
        switch(action.type){
        case "FETCH_LISTINGS":
            return Object.assign({}, state.listings, action.payload )
        default:
            return state
        }
}