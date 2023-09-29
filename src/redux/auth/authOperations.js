import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const respond = await createUserWithEmailAndPassword(auth, credentials);
      return respond;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const respond = await signInWithEmailAndPassword(auth, credentials);
      return respond.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (update, thunkAPI) => {
    const user = auth.currentUser;
    if (user) {
      try {
        await updateProfile(user, update);
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
