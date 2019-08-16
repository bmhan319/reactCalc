import React, {Component} from 'react';

class Calculator extends Component {
  state = {
    display: 0,
    equation: ""
  }

  firstNum = ""
  convertNum = true

  submit = (num) => {
      let regex = /[\-+*\/]/
      let firstNumber = num.toString()
      let result1 = firstNumber.match(regex)
      let symbol = ""
      
      if (result1 == null) {
        this.firstNum = "" + this.firstNum + num
        this.setState({
          display: this.firstNum,
        })
      } else if (result1 !== null) {
        symbol = num
        this.setState({
          display: this.firstNum,
          equation: this.firstNum + symbol
        })
      }
      console.log(this.firstNum)
  }  

  handleClear  = () => {
    this.firstNum = ""
    this.setState({
      display: 0
    })
  }

  handleConvert = () => {
    let  convert = parseFloat(this.firstNum)
    if (this.convertNum == true) {
      let toNeg = -Math.abs(convert)
      this.convertNum = false
      this.firstNum = toNeg
      this.setState({
        display: toNeg
      })
    } else {
      let toPos = Math.abs(convert)
      this.convertNum = true
      this.firstNum = toPos
      this.setState({
        display: toPos
      })
    }
      
  }
  

  render() {
    return(
      <div className="calc-container">
        <div className="display">
          <p>{this.state.display}</p>
        </div>
        <button onClick={this.handleClear} className="button text dark-grey clear">C</button>
        <button onClick={this.handleConvert} className="button text dark-grey negative">+/-</button>
        <button className="button text dark-grey percent">%</button>
        <button onClick={() => {this.submit("/")}} className="button text orange divide">/</button>
        <button onClick={() => {this.submit(7)}} className="button text light-grey seven">7</button>
        <button onClick={() => {this.submit(8)}} className="button text light-grey eight">8</button>
        <button onClick={() => {this.submit(9)}} className="button text light-grey nine">9</button>
        <button onClick={() => {this.submit("*")}} className="button text orange multiply">X</button>
        <button onClick={() => {this.submit(4)}} className="button text light-grey four">4</button>
        <button onClick={() => {this.submit(5)}} className="button text light-grey five">5</button>
        <button onClick={() => {this.submit(6)}} className="button text light-grey six">6</button>
        <button onClick={() => {this.submit("-")}} className="button text orange subtract">-</button>
        <button onClick={() => {this.submit(1)}} className="button text light-grey one">1</button>
        <button onClick={() => {this.submit(2)}} className="button text light-grey two">2</button>
        <button onClick={() => {this.submit(3)}} className="button text light-grey three">3</button>
        <button onClick={() => {this.submit("+")}} className="button text orange add">+</button>
        <button onClick={() => {this.submit(0)}} className="text light-grey zero">0</button>
        <button onClick={() => {this.submit(".")}} className="button text light-grey decimal">.</button>
        <button onClick={() => {this.submit("=")}} className="button text orange equals">=</button>
      </div>
    )
  }
}

  
export default Calculator

