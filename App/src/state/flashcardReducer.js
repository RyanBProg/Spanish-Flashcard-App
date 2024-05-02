const gameInitalState = {
  categoryIndex: 0,
  deckSize: 0,
  currentWordIndex: 0,
  score: 0,
  gameFinished: false,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "category_chosen":
      if (action.deckIndex === state.categoryIndex) {
        return state;
      } else {
        return {
          categoryIndex: action.deckIndex,
          deckSize: action.deckSize,
          currentWordIndex: 0,
          score: 0,
          gameFinished: false,
        };
      }
    case "answered_correct":
      // set game finished when answering last question
      if (state.currentWordIndex === state.deckSize - 2) {
        return {
          ...state,
          score: (state.score += 1),
          currentWordIndex: (state.currentWordIndex += 1),
          gameFinished: true,
        };
      } else {
        return {
          ...state,
          score: (state.score += 1),
          currentWordIndex: (state.currentWordIndex += 1),
        };
      }
    case "answered_incorrect":
      // set game finished when answering last question
      if (state.currentWordIndex === state.deckSize - 2) {
        return {
          ...state,
          currentWordIndex: (state.currentWordIndex += 1),
          gameFinished: true,
        };
      } else {
        return {
          ...state,
          currentWordIndex: (state.currentWordIndex += 1),
        };
      }
    case "game_finished":
      return { ...state, gameFinished: true };
    case "game_restart":
      return {
        ...state,
        currentWordIndex: 0,
        score: 0,
        gameFinished: false,
      };
  }
};

export { gameInitalState, gameReducer };
