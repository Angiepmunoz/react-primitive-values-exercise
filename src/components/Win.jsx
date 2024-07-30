const Win = ({handleReset}) => {
  return (
    <>
      <h2>YOU WIN!</h2>
      <button onClick={handleReset}>Click to play again</button>
    </>
  );
};

export default Win;
