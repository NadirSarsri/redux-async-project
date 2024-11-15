import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/postsSlice";

import Post from "./post";

const Posts = () => {
  const dispatch = useDispatch();
  const {
    posts: allPosts,
    error,
    status,
  } = useSelector((state) => state.postsSlice);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    } else if (status === "Succeeded") {
      //   console.log(allPosts);
      setPosts(allPosts);
    }
  }, [allPosts, status]);

  return (
    <div className="row g-3 row-cols-1 row-cols-md-2 row-cols-lg-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
