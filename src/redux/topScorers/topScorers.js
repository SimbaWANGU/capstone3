// Actions
const GET_SCORERS = 'football/topscorers/GET_SCORERS';

// Action Creator
export function getScorers(scorers) {
  return {
    type: GET_SCORERS,
    payload: scorers,
  };
}

// Reducer
export default function topScorerReducer(state = [], action) {
  switch (action.type) {
    case GET_SCORERS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
