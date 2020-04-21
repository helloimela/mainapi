import React, { Component } from 'react';
import './components.css';

class Preview extends Component {

  renderSquare(maxNum) {
    let arr = [];
    for (let i=(maxNum -5); i<maxNum; i++) {
      arr.push(
      <button 
        key={`square-${i}`} 
        className={`square ${this.props.squares[i].value}`}>
          {this.props.squares[i].id + 1 }
      </button>);
    }
    return arr;
  }

  renderRow(num){
    return <div className="board-row">
      {this.renderSquare(num)}
    </div>
  }
  
  render() {
    return (
      <div className="preview col-6">
        {this.renderRow(5)}
        {this.renderRow(10)}
        {this.renderRow(15)}
        {this.renderRow(20)}
        {this.renderRow(25)}
      </div>
    );
  }
  
}

export default Preview;