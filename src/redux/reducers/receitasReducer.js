export const INITIAL_STATE = {
  email: '',
  password: '',
};

export default function receitasReducer(state = INITIAL_STATE, { type, payload }) {
  const cases = {
    LOGIN: { ...state, ...payload },
  };
  return cases[type] || state;
}
