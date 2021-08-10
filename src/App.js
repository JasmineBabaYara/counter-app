import React, { Component } from 'react'
import './index.css' 
import Counter from './Counter'

class App extends Component{
  constructor(){
    super()
    this.state={
      num:0
    }
    this.addClick = this.addClick.bind(this)
    this.resetClick = this.resetClick.bind(this)
  }

  addClick(){
    this.setState({
      num: this.state.num +1
    })
  }

  resetClick(){
    this.setState({
      num:0
    })
  }

  render(){
    return(
      <Counter 
        addClick={this.addClick}
        resetClick={this.resetClick}
        data={this.state}
      />
    )
  }
}

export default App;