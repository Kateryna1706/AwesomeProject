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
  async (docId, thunkAPI) => {
    try {
      const ref = doc(db, "posts", docId);

      await deleteDoc(ref);
      console.log("document updated");
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updatePostComment = createAsyncThunk(
  "posts/updatePost",
  async (docId, date, thunkAPI) => {
    try {
      const ref = doc(db, "posts", docId);

      await updateDoc(ref, { comments: arrayUnion(date) });
      console.log("document updated");
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updatePostLike = createAsyncThunk(
  "posts/updatePost",
  async (docId, thunkAPI) => {
    try {
      const ref = doc(db, "posts", docId);

      await updateDoc(ref, { like: increment(1) });
      console.log("document updated");
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
