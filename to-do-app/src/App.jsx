import { Component } from 'react'
import './App.css'
import Input from './component/input'
import List from './component/List'

class App extends Component {

  constructor() {
    super()
  
    this.state = {
       value: "",
       data: []
    }
  }

  AddItem = () => {
    this.state.value==""? alert("Please enter a text") :
    this.state.data.push(this.state.value)
    this.setState({value:""})
    console.log(this.state.data)
  }

  Delete = (index) => {
      this.state.data.splice(index,1)
      this.setState({data:this.state.data})
  }

  Update = (index) => {
    const data = prompt()
    console.log(data)
    this.state.data[index] = data
    this.setState({data:this.state.data})
  }

  HandleChange = (text) => {
      this.setState({value:text})
  }

  render() {
    return(
        <>
          <h1 id='title'>To Do App</h1>
          <Input InputValue={this.state.value} Submit = {this.AddItem} Change={this.HandleChange}/>
          <div>
            <p>{this.state.value}</p>
          </div>
          <List data={this.state.data} Delete={this.Delete} Update={this.Update} />

        </>
    ) 
  }
}



export default App
