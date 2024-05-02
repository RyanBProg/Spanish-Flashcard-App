import React from "react";

const Controls = ({ state, dispatch }) => {
  return (
    <div className="controls-container">
      <button
        disabled={state.gameFinished}
        className="controls-btn correct-btn"
        onClick={() => {
          dispatch({ type: "answered_correct" });
        }}>
        Correct
      </button>
      <button
        disabled={state.gameFinished}
        className="controls-btn incorrect-btn"
        onClick={() => {
          dispatch({ type: "answered_incorrect" });
        }}>
        Incorrect
      </button>
      <p className="counters">Score: {state.score}</p>
      <p className="counters">
        Card {state.wordIndex + 1} out of {state.deckSize}
      </p>
    </div>
  );
};

export default Controls;
