import React, { Component } from 'react';

export default class Keypad extends Component {
  
//   constructor(props) {
//     super(props)
//     this.state = {
//       color: this.props.color
//     }
//   }

handleKeyUp = () => {
    console.log("Entering password...")
  }
  
  render() {
    return (
      <div >
          <input onKeyUp={this.handleKeyUp} type="password" />
      </div>
    )
  }
  
}