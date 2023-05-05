import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/actions/postActions";
import {
  getError,
  getIsLoading,
  getPosts,
} from "../redux/selectors/postsSelectors";

const Posts = (props) => {
  const { posts, isLoading, error } = props;

  useEffect(() => {
    if (posts.length === 0) props.fetchPosts();
    // props.fetchPosts();
  }, []);
  console.log(posts);

  return (
    <div>
      posts
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {typeof posts === "array" &&
          posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: getPosts(state),
  isLoading: getIsLoading(state),
  error: getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts(dispatch)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
