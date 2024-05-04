import categoryData from "../Components/categoryData.json";

const gameInitalState = {
  categoryIndex: 0,
  deckSize: categoryData[0].words.length,
  wordIndex: 0,
  score: 0,
  cardFlipped: false,
  gameFinished: false,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "category_chosen":
      return {
        ...gameInitalState,
        categoryIndex: action.deckIndex,
        deckSize: categoryData[action.deckIndex].words.length,
      };
    case "answered_correct":
      if (state.wordIndex === state.deckSize - 1) {
        return {
          ...state,
          score: state.score + 1,
          gameFinished: true,
        };
      } else {
        return {
          ...state,
          score: state.score + 1,
          wordIndex: state.wordIndex + 1,
          cardFlipped: false,
        };
      }
    case "answered_incorrect":
      if (state.wordIndex === state.deckSize - 1) {
        return {
          ...state,
          gameFinished: true,
        };
      } else {
        return {
          ...state,
          wordIndex: state.wordIndex + 1,
          cardFlipped: false,
        };
      }
    case "card_flipped":
      return { ...state, cardFlipped: !state.cardFlipped };
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
