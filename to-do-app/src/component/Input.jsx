import { Component } from 'react'

class Input extends Component {
  render() {
    return (
        <div id='add-task'>
            <input type="text" placeholder='Enter Text' value={this.props.InputValue} onChange={(e) => {this.props.Change(e.target.value)}} />
            <button onClick={this.props.Submit}>Add Item</button>
        </div>
    )
  }
}

export default Input
