import React from 'react';
import {Link} from 'react-router-dom'


class Listings extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            listings: null 
        }
    }

    componentDidMount(){
    }
    
    componentWillMount(){
        var self = this;
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