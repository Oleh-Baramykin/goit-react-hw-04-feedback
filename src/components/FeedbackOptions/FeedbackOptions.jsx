import { FeedBackBox, FeedBackList, Feed } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  OncounterTotalGood,
  OncounterTotalBad,
  OncounterTotalNeutral,
}) => {
  return (
    <FeedBackBox>
      <h2>Please Leave Feadback</h2>
      <FeedBackList>
        <li>
          <Feed
            style={{ backgroundColor: '#00ff00' }}
            type="button"
            onClick={OncounterTotalGood}
          >
            Good
          </Feed>
        </li>
        <li>
          <Feed
            style={{ backgroundColor: '#fbff0a' }}
            type="button"
            onClick={OncounterTotalNeutral}
          >
            Neutral
          </Feed>
        </li>
        <li>
          <Feed
            style={{ backgroundColor: '#ff0404' }}
            type="button"
            onClick={OncounterTotalBad}
          >
            Bad
          </Feed>
        </li>
      </FeedBackList>
    </FeedBackBox>
  );
};
