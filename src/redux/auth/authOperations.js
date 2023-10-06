import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const register = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (update, thunkAPI) => {
    const user = auth.currentUser;
    if (user) {
      try {
        const response = await updateProfile(user, update);
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
