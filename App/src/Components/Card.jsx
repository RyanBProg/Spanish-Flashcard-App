import React, { useState } from "react";

const Card = ({ state, categoryData }) => {
  const [cardFlip, setCardFlip] = useState(false);
  const currentWord = categoryData[state.categoryIndex].words[state.wordIndex];

  return (
    <div className="container">
      <div
        className={`flashcard-container ${cardFlip ? "flashcard-flipped" : ""}`}
        onClick={() => setCardFlip(!cardFlip)}>
        <div className="flashcard flashcard-front">
          <h3 className="card-word-txt">{currentWord.spanWord}</h3>
          <p className="reveal-txt">Click to flip card</p>
        </div>
        <div className="flashcard flashcard-back">
          <h3 className="card-word-txt">{currentWord.engTranslation}</h3>
          <p className="reveal-txt">Click to flip card</p>
        </div>
      </div>
      <div className="flashcard flashcard-behind">
        <h3 className="card-word-txt">{currentWord.spanWord}</h3>
        <p className="reveal-txt">Click to flip card</p>
      </div>
    </div>
  );
};

export default Card;

// flip back card when changing to next card
