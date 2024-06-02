const Results = ({ dispatch, state }) => {
  return (
    <>
      <h1>Game Completed</h1>
      <div className="container__results">
        <p className="results__subheading">You scored</p>
        <p className="results__score">
          {state.score} <span>out of</span> {state.deckSize}
        </p>
      </div>
      <button
        className="controls__btn--restart"
        onClick={() => {
          dispatch({ type: "game_restart" });
        }}>
        Restart Game
      </button>
    </>
  );
};

export default Results;
