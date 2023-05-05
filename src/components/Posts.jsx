import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { createPost, fetchPosts } from "../redux/actions/postActions";
import {
  getError,
  getIsLoading,
  getPosts,
} from "../redux/selectors/postsSelectors";

const PostsList = ({ isLoading, error, posts }) => {
  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;
  return (
    <>
      {[...posts].reverse().map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

const Posts = (props) => {
  const { posts, isLoading, error, fetchPosts, createPost } = props;

  useEffect(() => {
    if (posts.length === 0) fetchPosts();
  }, []);

  const postRef = useRef();
  const addPost = () => {
    if (postRef.current.value === "") return;

    const post = {
      title: postRef.current.value,
      body: postRef.current.value,
      userId: 1,
      id: posts.length + 1,
    };

    createPost(post);

    postRef.current.value = "";
  };

  return (
    <div>
      <h1>posts</h1>
      <div>
        <input type="text" ref={postRef} />
        <button onClick={addPost}>
          {isLoading ? "Loading..." : "Add Post"}
        </button>
      </div>
      <div>
        <PostsList isLoading={isLoading} error={error} posts={posts} />
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
  fetchPosts: () => dispatch(fetchPosts()),
  createPost: (post) => dispatch(createPost(post)),
});

// export default connect(mapStateToProps, mapDispatchToProps)(Posts);
export default connect(mapStateToProps, { fetchPosts, createPost })(Posts);
