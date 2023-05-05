const fetchPosts = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_POSTS_REQUEST" });

    try {
      const response = await fetch("http://localhost:3000/posts/");
      const data = await response.json();
      dispatch({ type: "FETCH_POSTS_SUCCESS", payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "FETCH_POSTS_ERROR", payload: error });
    }
  };
};

const createPost = (post) => async (dispatch) => {
  dispatch({ type: "ADD_POSTS_REQUEST" });

  try {
    const response = await fetch("http://localhost:3000/posts/", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    dispatch({ type: "ADD_POSTS_SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "ADD_POSTS_ERROR", payload: error });
  }
};

export { fetchPosts, createPost };
