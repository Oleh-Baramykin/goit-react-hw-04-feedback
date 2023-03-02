import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notificatios/Notifications';
import { Section } from './Section/Section';
import { FeedbackText } from './Statistics/Statistics.styled';
import { GlobStyle } from './App.styled';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = good + bad + neutral;

  const onBtnClick = e => {
    const currentClick = e.target.textContent.toLowerCase();
    switch (currentClick) {
      case 'good':
        setGood(x => x + 1);
        break;
      case 'neutral':
        setNeutral(x => x + 1);
        break;
      case 'bad':
        setBad(x => x + 1);
        break;
      default:
        return null;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback !== 0
      ? Math.round((good / countTotalFeedback) * 100)
      : 0;
  };

  const nameFeedback = ['good', 'bad', 'neutral'];
  return (
    <GlobStyle>
      <Section title="Please leave feedback">
        <FeedbackOptions options={nameFeedback} onLeaveFeedback={onBtnClick} />
        <FeedbackText>Statistics:</FeedbackText>
        {countTotalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </GlobStyle>
  );
}
