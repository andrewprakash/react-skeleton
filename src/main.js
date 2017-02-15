import React from 'react';
import ReactDOM from 'react-dom'
import Application from "./views/application/application.jsx"; 


class App extends React.Component {
    
    componentDidMount(){
        console.log("App Component Did Mount")
    }
    
    
    render() {
        return <Application />;
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));