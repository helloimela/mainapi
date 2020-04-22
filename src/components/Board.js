import React, { Component } from 'react';
import Question from './Question';
import './components.css';

class Board extends Component {
  renderQuestion(pos){
    return <Question
    key={pos}
    value={this.props.squares[pos]}
    totalQuestions={this.props.squares.length}
    onClick={(event) => this.props.onClick(event, pos)}/>
  }

  render() {
    return (
      <div className='board row justify-content-center'>
        <button className={`navBtn prev ${this.props.screen}`} onClick={()=>this.props.navClick('prev')}>Prev</button>
        <div className='col-11'>
          {this.renderQuestion(this.props.position)}
        </div>
        <button className={`navBtn next ${this.props.screen}`} onClick={()=>this.props.navClick('next')}>Next</button>
      </div>
    );
  }
}

export default Board;