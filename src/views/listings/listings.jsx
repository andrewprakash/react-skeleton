import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchListings } from '../../actions/listingsActions'

@connect((store) =>{
    return {
        listing: store.listing.listings
    }
})

class Listings extends React.Component{
    
    constructor(props){
        super(props)
        var self = this;
        this.state = {
            listings: self.props.listing
        }
    }

    componentDidMount(){
        var self = this
        self.setState({
            listings: this.props.dispatch(fetchListings())
        })
    }
    
    componentWillMount(){
        var self = this;
    }
    
    render(){
        var self = this;
        console.log("the listing", self.state)
        var listingList = null;
        // if(self.state.listings){
        //     listingList = self.state.listings.map((listing) =>{
        //         return (
        //                 <Link 
        //                     to={'/listings/' + listing.id}
        //                     key={listing.id}
        //                 >
        //                 {listing.name}
        //                 </Link>
        //             )
        //     })
        // }
        
        
        return(
            <div>
                Hello from listings
            </div>
        )
    }
}

module.exports = Listings;