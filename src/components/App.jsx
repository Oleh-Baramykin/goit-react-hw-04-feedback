import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notificatios/Notifications';
import { Section } from './Section/Section';
import { FeedbackText } from './Statistics/Statistics.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => {
      return acc + el;
    }, 0);
  };

  onBtnClick = e => {
    const currentClick = e.target.textContent.toLowerCase();
    this.setState(prevState => ({
      [currentClick]: prevState[currentClick] + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() !== 0
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      onBtnClick,
      state,
    } = this;
    const nameFeedback = Object.keys(state);
    return (
      <div
        style={{
          paddingTop: '40px',
          height: '100vh',
          textAlign: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={nameFeedback}
            onLeaveFeedback={onBtnClick}
          />
          <FeedbackText>Statistics:</FeedbackText>
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
