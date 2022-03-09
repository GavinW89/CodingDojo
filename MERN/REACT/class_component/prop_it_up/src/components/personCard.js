import React, { Component } from "react";

class Personcard extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.hair}</p>
            </div>
        )
    }
}

export default Personcard;