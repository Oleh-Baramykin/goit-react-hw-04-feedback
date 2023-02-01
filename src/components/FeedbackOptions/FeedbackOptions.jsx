export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <h1>Please Leave Feadback</h1>
      <ul>
        <li>
          <button type="button">Good</button>
        </li>
        <li>
          <button type="button">Neutral</button>
        </li>
        <li>
          <button type="button">Bad</button>
        </li>
      </ul>
    </>
  );
};
