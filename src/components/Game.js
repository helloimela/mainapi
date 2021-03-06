import React, { Component } from 'react';
import Preview from './Preview';
import Board from './Board';
import Result from './Result';
import './components.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(25).fill().map((_, i) => {
        return {
          id : i,
          value : 'O'
        }
      }),
      score: 0,
      position:0,
      screen: 'start',
      showCalculateBtn:'hide'
    };
  }

  handleClick(event, i){
    const squares = this.state.squares.slice();
    squares[i].value = event.target.dataset.answer;
    let showBtn = this.state.showCalculateBtn;

    if(i === squares.length - 1) {
      showBtn = 'show';
    }
    
    this.setState({
      squares: squares,
      showCalculateBtn: showBtn
    })
  }

  navClick(nav){
    const current = this.state.position;
    const max = this.state.squares.length;
    let newValue = nav === 'next' ? current + 1 : current - 1;
    
    let screen = this.state.screen;
    
    if(newValue === 0) {
      screen = 'start';
    } else if(newValue === max -1) {
      screen = 'end';
    } else {
      screen = 'ongoing';
    }

    if(newValue >= 0 ) {
      this.setState({
        position: newValue,
        screen: screen
      })
    }
    
  }

  calculateScore() {
    let newScore = calculateWinner(this.state.squares);
    this.setState({
      score: newScore,
      screen: 'result'
    })
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div className='col-11 col-md-3'>
            <h3 className='pageTitle'>Where have you been in Europe Bingo!</h3>
            <p className='text-center'>Choose <span className="h4 display">yes</span> or <span className="h4 display">no</span> and see how many bingo you get at the end of the quiz!</p>
            <Board 
              squares = {this.state.squares}
              onClick = {(event, i) => this.handleClick(event, i)}
              navClick = {(nav) => this.navClick(nav)}
              position = {this.state.position}
              screen = {this.state.screen}/>
            
          </div>
          <div className='result col-12' style={{display: this.state.showCalculateBtn === 'show' ? 'block' : 'none' }}>
            <button 
              className='calculateBtn'
              onClick={() => this.calculateScore()}>
              See result
            </button>
          </div>
          <Preview
            squares = {this.state.squares}/>
          <Result 
            screen = {this.state.screen}
            score = {this.state.score}
          />
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
    if (squares[a].value === 'Yes' && squares[b].value === 'Yes' && squares[c].value === 'Yes' && squares[d].value === 'Yes' && squares[e].value === 'Yes') {
      score += 1;
    }
  }
  return score;
}

export default Game;