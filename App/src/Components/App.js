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
  const [animate, setAnimate] = useState(false);

  const handleCardSwap = (answer) => {
    if (state.cardFlipped) {
      dispatch({ type: "card_flipped" });
      setTimeout(() => {
        setAnimate(true);
        setTimeout(() => {
          setAnimate(false);
          dispatch({ type: answer });
        }, 500);
      }, 400);
    } else {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
        dispatch({ type: answer });
      }, 500);
    }
  };

  return (
    <div className="app">
      <Header categoryData={categoryData} dispatch={dispatch} />
      {!state.gameFinished ? (
        <>
          <Card
            state={state}
            categoryData={categoryData}
            dispatch={dispatch}
            animate={animate}
          />
          <Controls
            state={state}
            dispatch={dispatch}
            handleCardSwap={handleCardSwap}
          />
        </>
      ) : (
        <Results dispatch={dispatch} state={state} />
      )}
    </div>
  );
};

export default App;
