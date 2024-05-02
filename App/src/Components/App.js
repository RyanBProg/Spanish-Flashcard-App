import React, { useState, useReducer, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Card from "./Card";
import Controls from "./Controls";
import Results from "./Results";
import categoryData from "./categoryData.json";
import { gameInitalState, gameReducer } from "../state/flashcardReducer";

const App = () => {
  const [state, dispatch] = useReducer(gameReducer, gameInitalState);

  // for inital game set up
  useEffect(() => {
    dispatch({
      type: "category_chosen",
      deckIndex: 0,
    });
  }, []);

  return (
    <div className="App">
      <Header categoryData={categoryData} dispatch={dispatch} />
      {!state.gameFinished ? (
        <Card state={state} categoryData={categoryData} />
      ) : (
        <Results dispatch={dispatch} />
      )}
      <Controls state={state} dispatch={dispatch} />
      <footer className="footer">
        <a className="footer-link" href="">
          App made by Ryan Bowler
        </a>
      </footer>
    </div>
  );
};

export default App;
