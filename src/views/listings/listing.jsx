import React from 'react';


class Listing extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        var self = this;
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