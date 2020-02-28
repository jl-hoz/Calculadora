import React from 'react';
import './App.css';
import './components/style.css';
import Button from "./components/Button";
import Display from "./components/Display";

class App extends React.Component {

  constructor(props){
    
    super(props);

    this.state = {
      input: "",
      sm: false,
    };

    this.addToInput = this.addToInput.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSM = this.handleSM.bind(this);
  }

  addToInput(number){
    if(this.state.input === "ERROR"){
      this.setState({input: number});
    } else {
      this.setState({input: this.state.input + number});
    }
  }

  handleEqual(){
    try{
      this.setState({ input: eval(this.state.input) });
    }catch(e){
      this.setState({ input: "ERROR" });
    }
  }

  handleSM(){
    this.setState({ sm: !this.state.sm });
  }

  handleClear(){
    this.setState({input: ""})
  }
  
  render(){
    let sm;
    if(this.state.sm){
      sm = (
        <div className="row">
              <Button handleClick={this.addToInput}>sin(</Button>
              <Button handleClick={this.addToInput}>cos(</Button>
              <Button handleClick={this.addToInput}>tan(</Button>
              <Button handleClick={this.addToInput}>(</Button>
              <Button handleClick={this.addToInput}>)</Button>
        </div>
      );
    }
    

    return (
      <div className="App">
        <Display result={this.state.input} />
        <div className="Buttons">
          <div className="row">
            <Button handleClick={this.handleClear}>C</Button>
            <Button handleClick={this.handleSM}>SM</Button>
            <Button handleClick={this.addToInput}>/</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.handleEqual}>=</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.addToInput}>.</Button>
          </div>
        </div>
        {sm}
      </div>
    );
  }
}

export default App;
