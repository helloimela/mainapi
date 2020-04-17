import React, { Component } from 'react';
import { questions } from '../data/questions.json'

class Question extends Component {

  renderContent(){
    let question;
    questions.forEach( q => {
      if(q.id === this.props.value) {
        question = q.question;
      }
    })
    return question
  }
  
  render() {
    return (
      <button className="question" onClick={this.props.onClick}>
        {this.renderContent()}
      </button>
    );
  }
  
}

export default Question;