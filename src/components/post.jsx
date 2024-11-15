import { useDispatch } from "react-redux";
import { deletePost } from "../features/postsSlice";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, body, id: postId } = post;
  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">
            {title.split(" ").slice(0, 3).join(" ").toUpperCase()}
          </h5>
          <p className="card-text">{body}</p>
        </div>
        <div className="card-footer">
          <button
            onClick={() => dispatch(deletePost(postId))}
            className="btn btn-danger me-3"
          >
            Delete
          </button>
          <button
            onClick={() => navigate(`/updatePost/${postId}`)}
            className="btn btn-primary"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
