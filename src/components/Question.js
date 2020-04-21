import React, { Component } from 'react';
import { questions } from '../data/questions.json';
import './components.css';

class Question extends Component {

  renderContent(){
    let question;
    questions.forEach( q => {
      if(q.id === this.props.value.id) {
        question = q.question;
      }
    })
    return question
  }
  
  render() {
    return (
      <div>
        <p>Question <span className="h4 display">{this.props.value.id +1}</span> of {this.props.totalQuestions}</p>
        <div className="question">
          <p>{this.renderContent()}</p>
          <button className="answer yes" data-answer="Yes" onClick={this.props.onClick}>Yes</button>
          <button className="answer no" data-answer="No" onClick={this.props.onClick}>No</button>
        </div>
      </div>
    );
  }
  
}

export default Question;