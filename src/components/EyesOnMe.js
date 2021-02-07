import React, { Component } from 'react';

export default class EyesOnMe extends Component {
  
//   constructor(props) {
//     super(props)
//     this.state = {
//       color: this.props.color
//     }
//   }

  handleFocus = () => {
    console.log("Good!")
  }

  handleBlur = () => {
    console.log("Hey! Eyes on me!")
  }
  
  render() {
    return (
      <div >
          <button onFocus={this.handleFocus} onBlur={this.handleBlur}/>
      </div>
    )
  }
  
}