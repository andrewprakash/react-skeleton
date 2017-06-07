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
                Hello world
            </div>
        )
    }
}

module.exports = Listing;