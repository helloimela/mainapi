import React, { Component } from 'react';
import Question from './Question'


class Board extends Component {
  renderSquare(maxNum) {
    let arr = [];
    for (let i=(maxNum -5); i<maxNum; i++) {
      arr.push(<Question
      key={i}
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}/>);
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
      <div>
        {this.renderRow(5)}
        {this.renderRow(10)}
        {this.renderRow(15)}
        {this.renderRow(20)}
        {this.renderRow(25)}
      </div>
    );
  }
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(25).fill('X'),
      score: 0,
    };
  }

  handleClick(i){
    const squares = this.state.squares.slice();
    squares[i] = this.state.squares[i] === 'X' ? 'O' : 'X';
    
    this.setState({
      squares: squares
    })
  }

  calculateScore() {
    let newScore = calculateWinner(this.state.squares);
    this.setState({
      score: newScore
    })
  }

  render() {
    return (
      <div className='container-fluid'>
        <h2>New Game</h2>
        <Board 
          squares = {this.state.squares}
          onClick={(i) => this.handleClick(i)}/>
        <button onClick={() => this.calculateScore()}>Calculate</button>
        <h4>{this.state.score}</h4>
      </div>
    );
  }
}

function calculateWinner(squares) {
  let score = 0;
  const lines = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d, e] = lines[i];
    if (squares[a] === 'O' && squares[b] === 'O' && squares[c] === 'O' && squares[d] === 'O' && squares[e] === 'O') {
      score += 1;
    }
  }
  return score;
}

export default Game;