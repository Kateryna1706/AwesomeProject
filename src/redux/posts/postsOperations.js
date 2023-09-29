import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./config";

export const fetchPosts = createAsyncThunk(
  "posts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const posts = await getDocs(collection(db, "posts"));
      posts.forEach((doc) => console.log(`${doc.id} =>`, doc.data()));
      return posts.map((doc) => ({ id: doc.id, data: doc.data() }));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (post, thunkAPI) => {
    try {
      const docRef = await addDoc(collection(db, "posts"), post);
      console.log("Document written with ID: ", docRef.id);
      return docRef.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (collectionName, docId, thunkAPI) => {
    try {
      const ref = doc(db, collectionName, docId);

      await deleteDoc(ref);
      console.log("document updated");
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (collectionName, docId, date, thunkAPI) => {
    try {
      const ref = doc(db, collectionName, docId);

      await updateDoc(ref, date);
      console.log("document updated");
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
