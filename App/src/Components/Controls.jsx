import React from "react";

const Controls = ({ handleCorrectAnswer, handleIncorrectAnswer, state }) => {
  return (
    <div className="controls-container">
      <button
        className="controls-btn correct-btn"
        onClick={handleCorrectAnswer}>
        Correct
      </button>
      <button
        className="controls-btn incorrect-btn"
        onClick={handleIncorrectAnswer}>
        Incorrect
      </button>
      <p className="counters">Correct Count: {state.score}</p>
      <p className="counters">Completed: {state.wordIndex} out of 0</p>
    </div>
  );
};

export default Controls;
