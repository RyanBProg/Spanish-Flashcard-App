import React from "react";
import tickIcon from "../assets/images/tick-icon.png";
import crossIcon from "../assets/images/cross-icon.png";

const Controls = ({ state, dispatch, handleCardSwap }) => {
  return (
    <div>
      <div className="controls-container">
        <button
          disabled={state.gameFinished}
          className="controls-btn correct-btn"
          onClick={() => {
            handleCardSwap("answered_correct");
          }}>
          <span>Correct</span>
          <img src={tickIcon} alt="tick icon" />
        </button>
        <button
          disabled={state.gameFinished}
          className="controls-btn incorrect-btn"
          onClick={() => {
            handleCardSwap("answered_incorrect");
          }}>
          <span>Incorrect</span>
          <img src={crossIcon} alt="cross icon" />
        </button>
      </div>
      <p className="counter">
        Score: <span>{state.score}</span>
      </p>
    </div>
  );
};

export default Controls;
