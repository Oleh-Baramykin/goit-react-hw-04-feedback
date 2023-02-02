import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 1,
    neutral: 2,
    bad: 3,
  };
  counterTotalGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1, bad: prevState.bad + 1 };
    });
  };
  // countTotalFeedback()
  // countPositiveFeedbackPercentage()

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          textAlign: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <FeedbackOptions />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total
          positivePercentage
          onClick={this.counterTotalGood}
        />
        <button type="button" onClick={this.counterTotalGood}>
          {' '}
          увеличить на 1
        </button>
      </div>
    );
  }
}
