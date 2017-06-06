import React from 'react';

class About extends React.Component{
    
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        console.log("component did mount")
    }
    
    componentWillUnmount(){
        
    }
    
    render(){
        return(
            <div id="about">
                hello from about page
            </div>
        )
    }
}

module.exports = About;