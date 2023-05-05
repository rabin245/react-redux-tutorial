const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
      };
    case "FETCH_POSTS_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
