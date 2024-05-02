const Results = ({ dispatch }) => {
  return (
    <>
      <h1>You Have Finished The Game</h1>
      <button
        onClick={() => {
          dispatch({ type: "game_restart" });
        }}>
        Restart Game
      </button>
    </>
  );
};

export default Results;
