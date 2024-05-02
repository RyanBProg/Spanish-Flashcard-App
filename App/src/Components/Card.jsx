import React, { useState } from "react";

const Card = ({ cardStatus, currentFlashcard, restartHandler }) => {
  const [cardFlip, setCardFlip] = useState(false);

  if (cardStatus === "flashcard") {
    return (
      <div className="card-container">
        <h3 className="card-word-txt">
          {cardFlip
            ? currentFlashcard.engTranslation
            : currentFlashcard.spanWord}
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
        <button className="reveal-btn" onClick={restartHandler}>
          Restart
        </button>
      </div>
    );
  }
};

export default Card;
