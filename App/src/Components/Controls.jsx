import React, { useState } from "react";

export default function Controls(props) {
  return (
    <div className="controls-container">
      <button className="controls-btn correct-btn" onClick={props.correctAns}>
        Correct
      </button>
      <button
        className="controls-btn incorrect-btn"
        onClick={props.incorrectAns}>
        Incorrect
      </button>
      <p className="counters">Correct Count: {props.score}</p>
      <p className="counters">
        Completed: {props.completedCounter} out of {props.deckSize}
      </p>
    </div>
  );
}
