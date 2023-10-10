import { register, logIn, logOut, refreshUser } from "./authOperations";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { name: "", email: "", photo: "" },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
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

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {
        handlePending(state);
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.token = action.payload.idToken;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(logIn.pending, (state, action) => {
        handlePending(state);
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.displayName;
        state.user.photo = action.payload.photoURL;
        state.token = action.payload.idToken;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logIn.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(logOut.pending, (state, action) => {
        handlePending(state);
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: "", email: "", photo: "" };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(refreshUser.pending, (state, action) => {
        handlePending(state);
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user.name = action.payload.displayName;
        state.user.photo = action.payload.photoURL;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        handleRejected(state, action);
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
