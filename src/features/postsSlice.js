import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api/axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await API.get("/posts");
  return response.data;
});

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postId) => {
    const response = await API.delete(`/posts/${postId}`);
    return response.data;
  }
);

export const addPost = createAsyncThunk("posts/addPost", async (newPost) => {
  const response = await API.post(`/posts`, newPost);
  return response.data;
});

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (updatedPost) => {
    const response = await API.put(`/posts/${updatedPost.id}`, updatedPost);
    return response.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle", //loading | Succeeded | Failed
    error: "",
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.error = "";
        state.status = "Succeeded";
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "Failed";
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        const index = state.posts.findIndex(
          (post) => post.id === action.meta.arg
        );
        state.posts.splice(index, 1);
        state.error = "";
        state.status = "Succeeded";
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "Failed";
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
        state.error = "";
        state.status = "Succeeded";
      })
      .addCase(addPost.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "Failed";
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        console.log(action);
        const index = state.posts.findIndex(
          (post) => (post.id = action.payload.id)
        );
        state.posts[index] = action.payload;
        state.error = "";
        state.status = "Succeeded";
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "Failed";
      });
  },
});

export default postsSlice.reducer;
