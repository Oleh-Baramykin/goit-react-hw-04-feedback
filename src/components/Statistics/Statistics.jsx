export const Statistics = ({ good, bad, neutral }) => {
  return (
    <>
      <h2>Statistics</h2>
      <p key={good}>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total:</p>
      <p>Positive Feedback:%</p>
    </>
  );
};
