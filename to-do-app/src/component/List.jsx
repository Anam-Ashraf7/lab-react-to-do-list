import { Component } from 'react'

export default class List extends Component {
  render() {
    return (
        <div>
            {this.props.data.map((item,index) => {
                return(
                <div className='item' key={index}>
                    <p>{item}</p>
                    <button onClick={() => this.props.Delete(index)}> <img src="../src/assets/close.png" alt="" /> </button>
                    <button onClick={() => this.props.Update(index)}>Edit</button>
                </div>
                )
            })}
      </div>
    )
  }
}
