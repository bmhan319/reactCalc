import React, {Component} from 'react';

class Calculator extends Component {
  state = {
    display: 0,
    convertNum: true,
    convert2ndNum: true,
    isFirstExpr: true
  }

  firstNum = ""
  secondNum = ""
  symbol = ""

  submit = (num) => {
    let regex = /[-+*/]/
    let result1 = num.match(regex)
    let result2 = num.match(regex)

    if (result1 !== null && this.firstNum.length === 0) {
      this.handleClear()
    }

    if (this.state.isFirstExpr) {
      if (result1 == null) {
        this.firstNum = "" + this.firstNum + num
        this.setState({
          display: this.firstNum
        })
        this.decimal("first", num)
      } 

      if (result1 !== null && this.firstNum.length > 0) {
        this.symbol = num
        this.setState({
          display: this.firstNum + this.symbol,
          isFirstExpr: false
        })
        document.querySelector(".decimal").disabled = false
      }
    }

    if (this.state.isFirstExpr === false) {
      if (result2 == null) {
        this.secondNum = "" + this.secondNum + num
        this.setState({
          display: this.firstNum + this.symbol + this.secondNum,
          isFirstExpr: false,
        })
        this.decimal("second", this.secondNum)
      }   
    }
  }

  flash = (button, num) => {
    let calcButton = document.querySelector(button)
    calcButton.classList.add("flash")
    setTimeout(function() { calcButton.classList.remove("flash") }, 500);
  }

  decimal = (string, num) => {
    let hasDecimal1 = num.match(/[.]/)
    let hasDecimal2 = num.match(/[.]/)

    if (hasDecimal1 && string === "first")  {
      document.querySelector(".decimal").disabled = "true"
    } else if (hasDecimal2 && string === "second") {
      document.querySelector(".decimal").disabled = "true"
    }
  }

  handleClear  = () => {
    this.firstNum = ""
    this.secondNum = ""
    document.querySelector(".decimal").disabled = false
    this.setState({
      display: 0,
      convertNum: true,
      convert2ndNum: true,
      isFirstExpr: true
    })
  }

  handleConvert = () => {
    if (this.firstNum === "") {
      return;
    }
    let  convert = parseFloat(this.firstNum)
    let  convert2nd = parseFloat(this.secondNum)

    if (this.state.isFirstExpr) {
      if (this.state.convertNum) {
        let toNeg = -Math.abs(convert)
        toNeg = toNeg.toString()
        this.setState({
          convertNum: false
        })
        this.firstNum = toNeg
      } else {
        let toPos = Math.abs(convert)
        toPos = toPos.toString()
        this.setState({
          convertNum: true
        })
        this.firstNum = toPos
      }
      this.setState({
        display: this.firstNum
      })
    } else {
      if (this.state.convert2ndNum) {
        let toNeg = -Math.abs(convert2nd)
        toNeg = toNeg.toString()
        this.setState({
          convert2ndNum: false
        })
        this.secondNum = toNeg
      } else {
        let toPos = Math.abs(convert2nd)
        toPos = toPos.toString()
        this.setState({
          convert2ndNum: true
        })
        this.secondNum = toPos
      }
      this.setState({
        display: this.firstNum + this.symbol + "(" + this.secondNum + ")"
      })
    }
  }

  handlePercent = () => {
    if (this.firstNum === "") {
      return;
    }
    let convert = parseFloat(this.firstNum)
    let convert2nd = parseFloat(this.secondNum)
    let percent = convert / 100
    let percent2nd = convert2nd / 100

    if (this.state.isFirstExpr) {
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
  }

  handleEqual = () => {
    let result = 0;
    let finalResult;
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
    finalResult = result.toFixed(5)
    
    this.setState({
      display: finalResult,
      convertNum: true,
      convert2ndNum: true,
      isFirstExpr: true
    })
    this.firstNum = result
    this.secondNum = ""
    this.symbol = ""
    document.querySelector(".decimal").disabled = false
  }
  


  render() {
    return(
      <div className="calc-container">
        <div className="display">
          <p>{this.state.display}</p>
        </div>
        <button onClick={() => {this.handleClear();this.flash(".clear")}} className="button text dark-grey clear">C</button>
        <button onClick={() => {this.handleConvert();this.flash(".negative")}} className="button text dark-grey negative">+/-</button>
        <button onClick={() => {this.handlePercent();this.flash(".percent")}} className="button text dark-grey percent">%</button>
        <button onClick={() => {this.submit("/");this.flash(".divide")}} className="button text orange divide">/</button>
        <button onClick={() => {this.submit("7");this.flash(".seven")}} className="button text light-grey seven">7</button>
        <button onClick={() => {this.submit("8");this.flash(".eight")}} className="button text light-grey eight">8</button>
        <button onClick={() => {this.submit("9");this.flash(".nine")}} className="button text light-grey nine">9</button>
        <button onClick={() => {this.submit("*");this.flash(".multiply")}} className="button text orange multiply">X</button>
        <button onClick={() => {this.submit("4");this.flash(".four")}} className="button text light-grey four">4</button>
        <button onClick={() => {this.submit("5");this.flash(".five")}} className="button text light-grey five">5</button>
        <button onClick={() => {this.submit("6");this.flash(".six")}} className="button text light-grey six">6</button>
        <button onClick={() => {this.submit("-");this.flash(".subtract")}} className="button text orange subtract">-</button>
        <button onClick={() => {this.submit("1");this.flash(".one")}} className="button text light-grey one">1</button>
        <button onClick={() => {this.submit("2");this.flash(".two")}} className="button text light-grey two">2</button>
        <button onClick={() => {this.submit("3");this.flash(".three")}} className="button text light-grey three">3</button>
        <button onClick={() => {this.submit("+");this.flash(".add")}} className="button text orange add">+</button>
        <button onClick={() => {this.submit("0");this.flash(".zero")}} className="text light-grey zero">0</button>
        <button onClick={() => {this.submit(".");this.flash(".decimal")}} className="button text light-grey decimal" disabled={false}>.</button>
        <button onClick={() => {this.handleEqual();this.flash(".equals")}} className="button text orange equals">=</button>
      </div>
    )
  }
}

  
export default Calculator

