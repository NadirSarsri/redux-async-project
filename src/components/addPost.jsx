import { useDispatch } from "react-redux";
import { addPost } from "../features/postsSlice";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const titleRef = useRef();
  const bodyRef = useRef();

  const dipatch = useDispatch();
  const navigate = useNavigate();

  const handleAddPost = () => {
    const newPost = {
      userId: 1,
      title: titleRef.current.value,
      body: bodyRef.current.value,
    };

    dipatch(addPost(newPost));
    navigate("/posts", { replace: true });
  };
  return (
    <form>
      <h2 className="display-6">Adding new post</h2>
      <div className="mb-3">
        <label className="form-label">Post title</label>
        <input ref={titleRef} type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Post body</label>
        <textarea ref={bodyRef} type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <button
          onClick={handleAddPost}
          className="btn btn-primary"
          type="button"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddPost;
