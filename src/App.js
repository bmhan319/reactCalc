import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="calc-container">
          <div className="display">
            <p>1234</p>
          </div>
          <button className="button text dark-grey clear">C</button>
          <button className="button text dark-grey negative">+/-</button>
          <button className="button text dark-grey percent">%</button>
          <button className="button text orange divide">/</button>
          <button className="button text light-grey seven">7</button>
          <button className="button text light-grey eight">8</button>
          <button className="button text light-grey nine">9</button>
          <button className="button text orange multiply">X</button>
          <button className="button text light-grey four">4</button>
          <button className="button text light-grey five">5</button>
          <button className="button text light-grey six">6</button>
          <button className="button text orange subtract">-</button>
          <button className="button text light-grey one">1</button>
          <button className="button text light-grey two">2</button>
          <button className="button text light-grey three">3</button>
          <button className="button text orange add">+</button>
          <button className="text light-grey zero">0</button>
          <button className="button text light-grey decimal">.</button>
          <button className="button text orange equals">=</button>
        </div>
      </div>
    );
  }
}

export default App;
