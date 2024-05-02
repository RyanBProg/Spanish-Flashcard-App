import React, { useState } from "react";

const Card = ({ dispatch, state, categoryData }) => {
  const [cardFlip, setCardFlip] = useState(false);
  const currentWord = categoryData[state.categoryIndex].words[state.wordIndex];

  if (!state.gameFinished) {
    return (
      <div className="card-container">
        <h3 className="card-word-txt">
          {cardFlip ? currentWord.engTranslation : currentWord.spanWord}
        </h3>
        <button className="reveal-btn" onClick={() => setCardFlip(!cardFlip)}>
          Reveal Answer
        </button>
      </div>
    );
  } else {
    return (
      <div className="card-container">
        <h3 className="card-word-txt">Well Done</h3>
        <p>You have finished the deck, good job!</p>
        <button
          className="reveal-btn"
          onClick={dispatch({
            type: "game_restart",
          })}>
          Restart
        </button>
      </div>
    );
  }
};

export default Card;
