export const INITIAL_STATE = {
  email: '',
  password: '',
  search: '',
  searchResults: [],
  sliceResults: [],
};

export default function receitasReducer(state = INITIAL_STATE, { type, payload }) {
  const cases = {
    LOGIN: { ...state, ...payload },
    SEARCH: { ...state, ...payload },
    SLICE: { ...state, sliceResults: payload },
  };
  return cases[type] || state;
}
