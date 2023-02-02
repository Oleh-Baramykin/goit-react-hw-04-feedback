import { FeedBackBox, FeedBackList, Feed } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback, FeedBackItem }) => {
  return (
    <FeedBackBox>
      <h2>Please Leave Feadback</h2>
      <FeedBackList>
        <li>
          <Feed type="button">Good</Feed>
        </li>
        <li>
          <Feed type="button">Neutral</Feed>
        </li>
        <li>
          <Feed type="button">Bad</Feed>
        </li>
      </FeedBackList>
    </FeedBackBox>
  );
};
