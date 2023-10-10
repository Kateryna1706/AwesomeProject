import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
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
      console.log(`createUserWithEmailAndPassword ${response.user}`);
      return response.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk("auth/logIn", async (data, thunkAPI) => {
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    console.log(`signInWithEmailAndPassword ${response.user}`);
    return response.user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (update, thunkAPI) => {
    const user = auth.currentUser;
    if (user) {
      try {
        await updateProfile(user, update);
        console.log(`updateProfile ${user}`);
        const displayName = user.displayName;
        const photoURL = user.photoURL;
        console.log(displayName);
        console.log(photoURL);
        return { displayName, photoURL };
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  const user = auth.currentUser;
  if (user) {
    try {
      await signOut(auth);
      console.log(`signOut`);
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});
