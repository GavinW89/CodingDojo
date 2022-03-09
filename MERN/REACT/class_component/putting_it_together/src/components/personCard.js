import React, { Component } from "react";

class Personcard extends Component{
    constructor(props){
        super(props)
        this.state ={
            age: this.props.age
        }
    }


    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hair}</p>
                <button onClick={() => {this.setState({age: this.state.age+1})}}>Birthday Button</button>
            </div>
        )
    }
}

export default Personcard;