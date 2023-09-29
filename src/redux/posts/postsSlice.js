import { createSlice } from "@reduxjs/toolkit";

import {
  fetchPosts,
  addPost,
  deletePost,
  updatePostComment,
  updatePostLike,
} from "./postsOperations";

const postsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const postsSlice = createSlice({
  name: "posts",
  initialState: postsInitialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        handlePending(state);
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(addPost.pending, (state, action) => {
        handlePending(state);
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(deletePost.pending, (state, action) => {
        handlePending(state);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deletePost.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(updatePostComment.pending, (state, action) => {
        handlePending(state);
      })
      .addCase(updatePostComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (post) => post.id === action.payload.id
        );
        state.items[index].comments.push(action.payload);
      })
      .addCase(updatePostComment.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(updatePostLike.pending, (state, action) => {
        handlePending(state);
      })
      .addCase(updatePostLike.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (post) => post.id === action.payload.id
        );
        state.items[index].like += 1;
      })
      .addCase(updatePostLike.rejected, (state, action) => {
        handleRejected(state, action);
      });
  },
});

export const postsReducer = postsSlice.reducer;
