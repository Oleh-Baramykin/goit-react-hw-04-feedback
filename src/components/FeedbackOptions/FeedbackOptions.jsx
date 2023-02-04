import PropTypes from 'prop-types';
import { FeedBackList, Feed } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedBackList>
      {options.map(el => (
        <Feed key={el} onClick={onLeaveFeedback} type="button">
          {el}
        </Feed>
      ))}
    </FeedBackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
