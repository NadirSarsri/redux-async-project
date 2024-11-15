import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { updatePost } from "../features/postsSlice";
import { useDispatch } from "react-redux";
import API from "../api/axios";

const UpdatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id: postId } = useParams();
  const [post, setPost] = useState(null);
  let status = "";

  const handleUpdatePost = () => {
    // const updatedPost = {
    //   userId: post.userId,
    //   id: postId,
    //   title: post.title,
    //   body: post.body,
    // };
    const updatedPost = post;
    dispatch(updatePost(updatedPost));
    navigate("/posts", { replace: true });
  };

  useEffect(() => {
    const fetchPostById = async () => {
      try {
        const response = await API.get(`posts/${postId}`);
        setPost(response.data);
        status = "Succeeded";
      } catch (err) {
        status = "Failed";
      }
    };

    if (!status) {
      fetchPostById();
    }

    return () => {};
  }, [status]);

  return (
    <>
      {post && (
        <form>
          <h2 className="display-6">Editing post #{postId}</h2>
          <div className="mb-3">
            <label className="form-label">Post title</label>
            <input
              onChange={(e) => {
                setPost({ ...post, title: e.target.value });
              }}
              value={post?.title}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Post body</label>
            <textarea
              onChange={(e) => {
                setPost({ ...post, body: e.target.value });
              }}
              value={post?.body}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <button
              onClick={handleUpdatePost}
              className="btn btn-primary"
              type="button"
            >
              Update
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default UpdatePost;
