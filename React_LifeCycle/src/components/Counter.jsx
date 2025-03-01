import React, { Component } from 'react'

export default class Counter extends Component {

    componentDidUpdate(prevProps){
        console.log("prevProps.number: ", prevProps.number)
        console.log("this.props.number: ", this.props.number)

        if(prevProps.number !== this.props.number){
            console.log("Component updated");
        }
    }

  render() {
    return (
      <>
        <h1>Increment: {this.props.number}</h1>
      </>
    )
  }
}
