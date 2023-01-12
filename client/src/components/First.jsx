import React, { Component } from "react";

class First extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    render() {
        const { firstName, lastName, hairColor } = this.props
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={() => { this.setState({ age: this.state.age += 1 }) }} >Birthday Button for {firstName} {lastName}</button>
            </div >
        )
    }
}


export default First