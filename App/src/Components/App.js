import React, { useState, useReducer } from "react";
import "./App.css";
import Header from "./Header";
import Card from "./Card";
import Controls from "./Controls";
import categoryData from "./categoryData.json";
import { gameInitalState, gameReducer } from "../state/flashcardReducer";

const App = () => {
  const [state, dispatch] = useReducer(gameReducer, gameInitalState);

  const [CategoryIndex, setCategoryIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  // controls counters
  let [score, setScore] = useState(0);
  const [deckSize, setDeckSize] = useState(
    categoryData[CategoryIndex].words.length
  );
  let [completedCounter, setCompletedCounter] = useState(0);

  // current card
  const currentFlashcard = categoryData[CategoryIndex]
    ? categoryData[CategoryIndex].words[wordIndex]
    : null;

  // card view
  const [cardStatus, setCardStatus] = useState("flashcard");

  // category change
  const handleCategoryChange = (e) => {
    const selectedCategoryName = e.target.value;
    const categoryIndex = categoryData.findIndex(
      (category) => category.name === selectedCategoryName
    );

    if (categoryIndex !== -1) {
      setCategoryIndex(categoryIndex);
      setWordIndex(0);
      setScore(0);
      setCompletedCounter(0);
      setDeckSize(categoryData[categoryIndex].words.length);
    }
  };

  // answer buttons
  const answer = () => {
    if (completedCounter === deckSize - 1) {
      setCardStatus("results");
      setCompletedCounter(completedCounter + 1);
    } else if (
      categoryData[CategoryIndex] &&
      categoryData[CategoryIndex].words[wordIndex + 1]
    ) {
      setWordIndex(wordIndex + 1);
      setCompletedCounter(completedCounter + 1);
    }
  };

  const correctAns = () => {
    answer();
    if (completedCounter <= deckSize - 1) {
      setScore((score += 1));
    }
  };

  // const handleCorrectAnswer = () => {
  //   if (!gameState.gameFinished) {
  //     dispatch({ type: "answered_correct" });
  //   }
  // };

  // const handleIncorrectAnswer = () => {
  //   if (!gameState.gameFinished) {
  //     dispatch({ type: "answered_incorrect" });
  //   }
  // };

  // restart game
  const restartHandler = () => {
    setWordIndex(0);
    setScore(0);
    setCompletedCounter(0);
    setCardStatus("flashcard");
  };

  return (
    <div className="App">
      <Header
        categoryData={categoryData}
        handleCategoryChange={handleCategoryChange}
      />
      <Card
        currentFlashcard={currentFlashcard}
        cardStatus={cardStatus}
        restartHandler={restartHandler}
      />
      <Controls
        incorrectAns={answer}
        correctAns={correctAns}
        score={score}
        completedCounter={completedCounter}
        deckSize={deckSize}
      />
      <footer className="footer">
        <a className="footer-link" href="">
          App made by Ryan Bowler
        </a>
      </footer>
    </div>
  );
};

export default App;
