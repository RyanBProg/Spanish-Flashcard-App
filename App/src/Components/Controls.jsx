import React from "react";

const Controls = ({
  correctAns,
  incorrectAns,
  score,
  completedCounter,
  deckSize,
}) => {
  return (
    <div className="controls-container">
      <button className="controls-btn correct-btn" onClick={correctAns}>
        Correct
      </button>
      <button className="controls-btn incorrect-btn" onClick={incorrectAns}>
        Incorrect
      </button>
      <p className="counters">Correct Count: {score}</p>
      <p className="counters">
        Completed: {completedCounter} out of {deckSize}
      </p>
    </div>
  );
};

export default Controls;
