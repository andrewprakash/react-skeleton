import React from 'react';
import {Link} from 'react-router-dom'
import dispatcher from '../../stores/flux/dispatcher'

import listingstore from '../../stores/listings/listingstore'

class Listings extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            listings: null 
        }
    }

    componentDidMount(){
        dispatcher.dispatch({
            type: "GET_LISTING",
            data: {}
        })
    }
    
    componentWillMount(){
        var self = this;
        listingstore.on("listings", function(data){
            self.setState({
                listings: data
            })
        })
    }
    
    render(){
        var self = this;
        
        var listingList = null;
        if(self.state.listings){
            listingList = self.state.listings.map((listing) =>{
                return (
                        <Link 
                            to={'/listings/' + listing.id}
                            key={listing.id}
                        >
                        {listing.name}
                        </Link>
                    )
            })
        }
        
        
        return(
            <div>
                {listingList}
            </div>
        )
    }
}

module.exports = Listings;