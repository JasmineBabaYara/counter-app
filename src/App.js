import React, { Component } from 'react'
import './index.css' 

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
      <div>
        <span className="num">{this.state.num}</span>
        <div className="btn">
          <button className="start-btn" onClick={this.addClick}>Add</button>
          <button className="reset-btn" onClick={this.resetClick}>Reset</button>
        </div>
      </div>
    )
  }
}

export default App;