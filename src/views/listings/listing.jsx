import React from 'react';
import listingstore from '../../stores/listings/listingstore'


class Listing extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        var self = this;
        self.setState({
            listing: listingstore.getListing(self.props.match.params.id)
        })
    }

    render(){
        var self = this;
        
        return(
            <div>
                {self.state.listing.name}
            </div>
        )
    }
}

module.exports = Listing;