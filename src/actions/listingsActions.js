export function fetchListings(){
    return {
        type:"FETCH_LISTINGS",
        payload: {
            name: "Washing",
            description: "Need to wash the car"
        }
    }
}