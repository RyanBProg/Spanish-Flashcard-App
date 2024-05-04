import React from "react";
import spainFlagIcon from "../assets/images/spain-flag-icon.png";
import spainMapIcon from "../assets/images/spain-map-icon.png";
import sagradaIcon from "../assets/images/sagrada-familia-icon.png";

const BackCard = ({ categoryData, state }) => {
  if (state.wordIndex === state.deckSize - 1) {
    return (
      <img src={sagradaIcon} alt="sagrada familia icon" className="card-icon" />
    );
  } else {
    return (
      <>
        <img src={spainFlagIcon} alt="spain flag icon" className="card-icon" />
        <p className="card-number">
          {state.wordIndex + 2}/<span>{state.deckSize}</span>
        </p>
        <h3 className="card-word-txt">
          {
            categoryData[state.categoryIndex].words[state.wordIndex + 1]
              .spanWord
          }
        </h3>
        <p className="reveal-txt">Click to flip card</p>
      </>
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
          <img
            src={spainFlagIcon}
            alt="spain flag icon"
            className="card-icon"
          />
          <p className="card-number">
            {state.wordIndex + 1}/<span>{state.deckSize}</span>
          </p>
          <h3 className="card-word-txt">{currentWord.spanWord}</h3>
          <p className="reveal-txt">Click to flip card</p>
        </div>
        <div className={`flashcard flashcard-back`}>
          <img src={spainMapIcon} alt="spain map icon" className="card-icon" />
          <p className="card-number">
            {state.wordIndex + 1}/<span>{state.deckSize}</span>
          </p>
          <h3 className="card-word-txt">{currentWord.engTranslation}</h3>
          <p className="reveal-txt">Click to flip card</p>
        </div>
      </div>
      <div className="flashcard flashcard-behind">
        <BackCard categoryData={categoryData} state={state} />
      </div>
    </div>
  );
};

export default Card;
