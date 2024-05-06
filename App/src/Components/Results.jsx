const Results = ({ dispatch, state }) => {
  return (
    <>
      <h1>Game Completed</h1>
      <div className="results-container">
        <p className="results-subheading">You scored</p>
        <p className="results-score">
          {state.score} <span>out of</span> {state.deckSize}
        </p>
      </div>
      <button
        className="controls-btn restart-btn"
        onClick={() => {
          dispatch({ type: "game_restart" });
        }}>
        Restart Game
      </button>
    </>
  );
};

export default Results;
