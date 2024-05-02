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
  let [completedCounter, setCompletedCounter] = useState(0);

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
    }
  };

  // answer buttons
  const answer = () => {
    if (completedCounter === state.deckSize - 1) {
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
    if (completedCounter <= state.deckSize - 1) {
      setScore((score += 1));
    }
  };

  const handleCorrectAnswer = () => {
    if (!state.gameFinished) {
      dispatch({ type: "answered_correct" });
    }
  };

  const handleIncorrectAnswer = () => {
    if (!state.gameFinished) {
      dispatch({ type: "answered_incorrect" });
    }
  };

  // restart game
  const restartHandler = () => {
    setWordIndex(0);
    setScore(0);
    setCompletedCounter(0);
  };

  return (
    <div className="App">
      <Header categoryData={categoryData} dispatch={dispatch} />
      <Card dispatch={dispatch} state={state} categoryData={categoryData} />
      <Controls
        handleCorrectAnswer={handleCorrectAnswer}
        handleIncorrectAnswer={handleIncorrectAnswer}
        state={state}
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
