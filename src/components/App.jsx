import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
// import { Notifications } from './Notificatios/Notifications';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counterTotalGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  counterTotalNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  counterTotalBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    // const { good, neutral, bad } = this.state;
    let total = 0;
    total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
  // countPositiveFeedbackPercentage()

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = Math.round((good / total) * 100);
    const notifications = total === 0 ? 'There is no feedback' : null;
    return (
      <div
        style={{
          height: '100vh',
          textAlign: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <FeedbackOptions
          OncounterTotalGood={this.counterTotalGood}
          OncounterTotalNeutral={this.counterTotalNeutral}
          OncounterTotalBad={this.counterTotalBad}
        />
        {total !== 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
        {/* <Notifications message="There is no feedback" /> */}
        <h4>{notifications}</h4>
      </div>
    );
  }
}
