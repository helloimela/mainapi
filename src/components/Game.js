import React, { Component } from 'react';
import Question from './Question'


class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position:0,
    };
  }

  renderQuestion(pos){
    return <Question
    key={pos}
    value={this.props.squares[pos]}
    onClick={() => this.props.onClick(pos)}/>
  }

  navClick(nav){
    let current = this.state.position;
    let newValue = nav === 'next' ? current + 1 : current - 1;
    if(newValue >= 0 ) {
      this.setState({
        position: newValue,
      })
    }
    
  }

  render() {
    return (
      <div>
        <button onClick={()=>this.navClick('prev')}>Prev</button>
        {this.renderQuestion(this.state.position)}
        <button onClick={()=>this.navClick('next')}>Next</button>
      </div>
    );
  }
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(25).fill().map((_, i) => i),
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
        <div className='row justify-content-md-center'>
          <div className='col-sm-12 col-md-3'>
            <h2>New Game</h2>
            <Board 
              squares = {this.state.squares}
              onClick={(i) => this.handleClick(i)}/>
            <button onClick={() => this.calculateScore()}>Calculate</button>
            <h4>{this.state.score}</h4>
          </div>
        </div>
        
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
    if (squares[a] === 'X' && squares[b] === 'X' && squares[c] === 'X' && squares[d] === 'X' && squares[e] === 'X') {
      score += 1;
    }
  }
  return score;
}

export default Game;