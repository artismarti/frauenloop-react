import React, { Component } from 'react'

class Fields extends Component {
  state = {
    placeholder: this.props.placeholder,
  }

  handleClick = () => {
    this.setState({ placeholder: Math.random() })
  }

  render() {
    return (
      <>
        <input type="text" placeholder={this.state.placeholder} />
        <button onClick={this.handleClick}>{this.props.buttonName}</button>
      </>
    )
  }
}

export default Fields
