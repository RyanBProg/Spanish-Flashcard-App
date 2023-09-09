import React, { useState } from "react";

export default function Card(props) {
  const [cardFlip, setCardFlip] = useState(false);

  if (props.cardStatus === "flashcard") {
    return (
      <div className="card-container">
        <h3 className="card-word-txt">
          {cardFlip
            ? props.currentFlashcard.engTranslation
            : props.currentFlashcard.spanWord}
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
        <button className="reveal-btn" onClick={props.restartHandler}>
          Restart
        </button>
      </div>
    );
  }
}
