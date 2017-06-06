import React from 'react';

class CarsDetail extends React.Component{
        constructor(props){
        super(props)
    }

    render(){
        var self = this;
        
        console.log("the current props", self.props.match.params.id)
        
        return(
            <div>
                Hello from car details page
            </div>
        )
    }
}

module.exports = CarsDetail;