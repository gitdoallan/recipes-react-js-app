export const INITIAL_STATE = {
  email: '',
  password: '',
  search: '',
  searchResults: [],
  sliceResults: [],
  filterByCategory: false,
  currentCategory: '',
};

export default function receitasReducer(state = INITIAL_STATE, { type, payload }) {
  const cases = {
    LOGIN: { ...state, ...payload },
    SEARCH: { ...state, ...payload },
    SLICE: { ...state, sliceResults: payload },
    FILTER_CATEGORY: { ...state, ...payload },
  };
  return cases[type] || state;
}
