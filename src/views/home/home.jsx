import React from 'react';
import { connect } from 'react-redux'

@connect((store) =>{
    return {
        foo: 1
    }
})
class Home extends React.Component{
    componentDidMount(){
    }
    componentWillUnmount(){
        
    }
    render(){
        return(
            <div id="about">
                hello from home page
            </div>
        )
    }
}

module.exports = Home;