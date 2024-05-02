const gameInitalState = {
  categoryIndex: 0,
  wordIndex: 0,
  score: 0,
  gameFinished: false,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "category_chosen":
      return {
        categoryIndex: action.deckIndex,
        wordIndex: 0,
        score: 0,
        gameFinished: false,
      };
    case "answered_correct":
      // set game finished when answering last question
      if (state.wordIndex === state.deckSize - 2) {
        return {
          ...state,
          score: state.score + 1,
          wordIndex: state.wordIndex + 1,
          gameFinished: true,
        };
      } else {
        return {
          ...state,
          score: state.score + 1,
          wordIndex: state.wordIndex + 1,
        };
      }
    case "answered_incorrect":
      // set game finished when answering last question
      if (state.wordIndex === state.deckSize - 2) {
        return {
          ...state,
          wordIndex: state.wordIndex + 1,
          gameFinished: true,
        };
      } else {
        return {
          ...state,
          wordIndex: state.wordIndex + 1,
        };
      }
    case "game_finished":
      return { ...state, gameFinished: true };
    case "game_restart":
      return {
        ...state,
        wordIndex: 0,
        score: 0,
        gameFinished: false,
      };
  }
};

export { gameInitalState, gameReducer };
