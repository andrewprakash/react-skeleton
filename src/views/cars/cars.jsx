import React from 'react';
import {Link} from 'react-router-dom'
class Cars extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            data: [
                {
                    id: 1,
                    name: "Toyota"
                },
                {
                    id: 2,
                    name: "Mazda"
                }
            ]        
        }
    }

    componentDidMount(){
        
    }
    render(){
        var self = this;
        
        var carsNode = self.state.data.map((car) =>{
            return (
                    <Link 
                    to={'/cars/' + car.id}
                    key={car.id}
                    >
                    {car.name}
                    </Link>
                )
        })
        
        
        return(
            <div>
                {carsNode}
            </div>
        )
    }
}

module.exports = Cars;