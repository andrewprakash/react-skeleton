import React from 'react';
import {Link} from 'react-router-dom'
import {Menu, Segment} from 'semantic-ui-react'

class Header extends React.Component{
    constructor(props){
        super(props)
        let currentLocation = window.location.pathname.split("/")[1]
        this.state = {
            activeItem: currentLocation
        }
        this.handleItemClick = this.handleItemClick.bind(this)
    }

    componentWillMount(){
        console.log("props", this.props)
    }    

    handleItemClick(e, { name }){
        this.setState({ activeItem: name })
    }
    
    render(){
        var self = this;
        const { activeItem } = this.state
        return(
            <Menu stackable>
                <Menu.Item as={Link} to="/" name="home" active={activeItem === 'home'} onClick={this.handleItemClick}/>
                <Menu.Item as={Link} to="/listings" name="listings" active={activeItem === 'listings'} onClick={this.handleItemClick}/>
                <Menu.Item as={Link} to="/about" name="about" active={activeItem === 'about'} onClick={this.handleItemClick}/>
            </Menu>
        )
    }
}

module.exports = Header;