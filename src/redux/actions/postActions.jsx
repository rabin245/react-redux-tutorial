const fetchPosts = () => {
  return (dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        dispatch({ type: "FETCH_POSTS", payload: posts });
      });
  };
};

export { fetchPosts };
