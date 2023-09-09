import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Card from "./Card";
import Controls from "./Controls";
import flashcardCategories from "./Data";

/*
- TO DO-
-make reveal answer go back to false when the next card is shown
 */

export default function App() {
  // form category selection
  const [CategoryIndex, setCategoryIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  // controls counters
  let [score, setScore] = useState(0);
  const [deckSize, setDeckSize] = useState(
    flashcardCategories[CategoryIndex].words.length
  );
  let [completedCounter, setCompletedCounter] = useState(0);

  // current card
  const currentFlashcard = flashcardCategories[CategoryIndex]
    ? flashcardCategories[CategoryIndex].words[wordIndex]
    : null;

  // card view
  const [cardStatus, setCardStatus] = useState("flashcard");

  // category change
  const handleCategoryChange = (e) => {
    const selectedCategoryName = e.target.value;
    const categoryIndex = flashcardCategories.findIndex(
      (category) => category.name === selectedCategoryName
    );

    if (categoryIndex !== -1) {
      setCategoryIndex(categoryIndex);
      setWordIndex(0);
      setScore(0);
      setCompletedCounter(0);
      setDeckSize(flashcardCategories[categoryIndex].words.length);
    }
  };

  // answer buttons
  const answer = () => {
    if (completedCounter === deckSize - 1) {
      setCardStatus("results");
      setCompletedCounter(completedCounter + 1);
    } else if (
      flashcardCategories[CategoryIndex] &&
      flashcardCategories[CategoryIndex].words[wordIndex + 1]
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
        flashcardCategories={flashcardCategories}
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
}
