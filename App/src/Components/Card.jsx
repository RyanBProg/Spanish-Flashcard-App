import React, { useState } from "react";

const Card = ({ state, categoryData }) => {
  const [cardFlip, setCardFlip] = useState(false);
  const currentWord = categoryData[state.categoryIndex].words[state.wordIndex];

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
};

export default Card;
