import React, { Component } from 'react';
import './components.css';

class Result extends Component {
  render() {
    return (
      <div className='finalResult' style={{display: this.props.screen === 'result' ? 'block' : 'none' }}>
        <h1 className='pageTitle'>Yeay! <br></br>Your score is</h1>
        <h4 className='display score'>{this.props.score}</h4> 
        <button className='button-primary' onClick={() => window.location.reload(false)}>Restart Game</button>
      </div>
    );
  }
}

export default Result;