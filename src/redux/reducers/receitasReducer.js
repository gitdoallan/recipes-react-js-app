export const INITIAL_STATE = {
  search: '',
  searchHistory: [],
  searchResults: [],
  videoId: '',
  watchedVideos: [],
  videoInfoApi: [],
};

export default function receitasReducer(state = INITIAL_STATE, { type, payload }) {
  const cases = {
    SEARCH: { ...state, search: payload },
    SEARCH_RESULTS: { ...state, searchResults: payload },
    VIDEO_ID: { ...state, videoId: payload },
    VIDEO_INFO: { ...state, videoInfoApi: payload },
  };
  return cases[type] || state;
}
// object literals
