import React from "react";
import spainFlagIcon from "../assets/images/spain-flag-icon.png";
import spainMapIcon from "../assets/images/spain-map-icon.png";

const BackCard = ({ categoryData, state }) => {
  if (state.wordIndex === state.deckSize - 1) {
    return <h3 className="card-word-txt">Last Card</h3>;
  } else {
    return (
      <h3 className="card-word-txt">
        {categoryData[state.categoryIndex].words[state.wordIndex + 1].spanWord}
      </h3>
    );
  }
};

const Card = ({ state, categoryData, dispatch, animate }) => {
  const currentWord = categoryData[state.categoryIndex].words[state.wordIndex];

  return (
    <div className="container">
      <div
        className={`flashcard-container ${animate ? "card-shuffle-back" : ""} ${
          state.cardFlipped ? "flashcard-flipped" : ""
        }`}
        onClick={() => {
          dispatch({ type: "card_flipped" });
        }}>
        <div className="flashcard">
          <img src={spainFlagIcon} alt="" className="card-icon" />
          <h3 className="card-word-txt">{currentWord.spanWord}</h3>
          <p className="reveal-txt">Click to flip card</p>
        </div>
        <div className={`flashcard flashcard-back`}>
          <img src={spainMapIcon} alt="" className="card-icon" />
          <h3 className="card-word-txt">{currentWord.engTranslation}</h3>
          <p className="reveal-txt">Click to flip card</p>
        </div>
      </div>
      <div className="flashcard flashcard-behind">
        <img src={spainFlagIcon} alt="" className="card-icon" />
        <BackCard categoryData={categoryData} state={state} />
        <p className="reveal-txt">Click to flip card</p>
      </div>
    </div>
  );
};

export default Card;
