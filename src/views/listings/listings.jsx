import React from 'react';
import {Link} from 'react-router-dom'
import listingstore from '../../stores/listings/listingstore'

class Listings extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            data: listingstore.getListings()
        }
    }

    componentDidMount(){
        
    }
    render(){
        var self = this;
        
        var listingList = self.state.data.map((listing) =>{
            return (
                    <div>
                        <Link 
                            to={'/listings/' + listing.id}
                            key={listing.id}
                        >
                        {listing.name}
                        </Link>
                    </div>
                )
        })
        
        
        return(
            <div>
                {listingList}
            </div>
        )
    }
}

module.exports = Listings;