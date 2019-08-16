import React, {Component} from 'react';

class Calculator extends Component {
  state = {
    display: 0
  }

  firstNum = ""
  secondNum = ""
  convertNum = true
  convert2ndNum = true
  isFirstExpr = true
  equation = ""
  symbol = ""

  submit = (num) => {
    let regex = /[-+*/]/
    let result1 = num.match(regex)
    let result2 = num.match(regex)
    
    if (this.isFirstExpr) {
      if (result1 == null) {
        this.firstNum = "" + this.firstNum + num
        this.setState({
          display: this.firstNum,
        })
      } 

      if (result1 !== null) {
        this.symbol = num
        this.setState({
          display: this.firstNum + this.symbol
        })
        this.isFirstExpr = false;
      }
    }

    if (this.isFirstExpr === false) {
      if (result2 == null) {
        this.secondNum = "" + this.secondNum + num
        this.setState({
          display: this.firstNum + this.symbol + this.secondNum,
        })
      }   
      this.isFirstExpr = false;
    }
    this.equation = this.firstNum + this.symbol + this.secondNum
  }  

  handleClear  = () => {
    this.firstNum = ""
    this.secondNum = ""
    this.isFirstExpr = true
    this.convertNum = true
    this.convert2ndNum = true
    this.setState({
      display: 0
    })
  }

  handleConvert = () => {
    if (this.firstNum === "") {
      return;
    }
    let  convert = parseFloat(this.firstNum)
    let  convert2nd = parseFloat(this.secondNum)

    if (this.isFirstExpr) {
      if (this.convertNum) {
        let toNeg = -Math.abs(convert)
        toNeg = toNeg.toString()
        this.convertNum = false
        this.firstNum = toNeg
      } else {
        let toPos = Math.abs(convert)
        toPos = toPos.toString()
        this.convertNum = true
        this.firstNum = toPos
      }
      this.setState({
        display: this.firstNum
      })
    } else {
      if (this.convert2ndNum) {
        let toNeg = -Math.abs(convert2nd)
        toNeg = toNeg.toString()
        this.convert2ndNum = false
        this.secondNum = toNeg
      } else {
        let toPos = Math.abs(convert2nd)
        toPos = toPos.toString()
        this.convert2ndNum = true
        this.secondNum = toPos
      }
      this.setState({
        display: this.firstNum + this.symbol + "(" + this.secondNum + ")"
      })
    }
    this.equation = this.firstNum + this.symbol + this.secondNum
  }

  handlePercent = () => {
    if (this.firstNum === "") {
      return;
    }
    let convert = parseFloat(this.firstNum)
    let convert2nd = parseFloat(this.secondNum)
    let percent = convert / 100
    let percent2nd = convert2nd / 100

    if (this.isFirstExpr) {
      percent = percent.toString()
      this.firstNum = percent
      this.setState({
        display: this.firstNum
      })
    } else {
      percent2nd = percent2nd.toString()
      this.secondNum = percent2nd
      this.setState({
        display: this.firstNum + this.symbol + this.secondNum
      })
    }
    this.equation = this.firstNum + this.symbol + this.secondNum
  }

  handleEqual = () => {
    let result;
    let numFirstNum = Number(this.firstNum)
    let numSecondNum = Number(this.secondNum)
    if (this.symbol === "+") {
      result = numFirstNum + numSecondNum
    } else if (this.symbol === "-") {
      result = numFirstNum - numSecondNum
    } else if (this.symbol === "*") {
      result = numFirstNum * numSecondNum
    } else if (this.symbol === "/") {
      result = numFirstNum / numSecondNum
    }
    

    //let result = eval(this.equation)
    this.setState({
      display: result
    })
    this.firstNum = result
    this.secondNum = ""
    this.convertNum = true
    this.convert2ndNum = true
    this.isFirstExpr = true
    this.equation = ""
    this.symbol = ""
  }
  

  render() {
    return(
      <div className="calc-container">
        <div className="display">
          <p>{this.state.display}</p>
        </div>
        <button onClick={this.handleClear} className="button text dark-grey clear">C</button>
        <button onClick={this.handleConvert} className="button text dark-grey negative">+/-</button>
        <button onClick={this.handlePercent} className="button text dark-grey percent">%</button>
        <button onClick={() => {this.submit("/")}} className="button text orange divide">/</button>
        <button onClick={() => {this.submit("7")}} className="button text light-grey seven">7</button>
        <button onClick={() => {this.submit("8")}} className="button text light-grey eight">8</button>
        <button onClick={() => {this.submit("9")}} className="button text light-grey nine">9</button>
        <button onClick={() => {this.submit("*")}} className="button text orange multiply">X</button>
        <button onClick={() => {this.submit("4")}} className="button text light-grey four">4</button>
        <button onClick={() => {this.submit("5")}} className="button text light-grey five">5</button>
        <button onClick={() => {this.submit("6")}} className="button text light-grey six">6</button>
        <button onClick={() => {this.submit("-")}} className="button text orange subtract">-</button>
        <button onClick={() => {this.submit("1")}} className="button text light-grey one">1</button>
        <button onClick={() => {this.submit("2")}} className="button text light-grey two">2</button>
        <button onClick={() => {this.submit("3")}} className="button text light-grey three">3</button>
        <button onClick={() => {this.submit("+")}} className="button text orange add">+</button>
        <button onClick={() => {this.submit("0")}} className="text light-grey zero">0</button>
        <button onClick={() => {this.submit(".")}} className="button text light-grey decimal">.</button>
        <button onClick={this.handleEqual} className="button text orange equals">=</button>
      </div>
    )
  }
}

  
export default Calculator

