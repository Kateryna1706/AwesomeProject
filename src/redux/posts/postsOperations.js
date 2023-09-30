import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./config";

export const fetchPosts = createAsyncThunk(
  "posts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const posts = await getDocs(collection(db, "posts"));
      posts.forEach((doc) => console.log(`${doc.id} =>`, doc.data()));
      posts.map((doc) => ({ id: doc.id, data: doc.data() }));
      return posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (data, thunkAPI) => {
    try {
      const post = await addDoc(collection(db, "posts"), {
        timestamp: serverTimestamp(),
        ...data,
      });
      console.log("Document written with ID: ", docRef.id);
      return post;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (docId, thunkAPI) => {
    try {
      const post = doc(db, "posts", docId);

      const deletedPost = await deleteDoc(post);
      console.log("document updated");
      return deletedPost;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updatePostComment = createAsyncThunk(
  "posts/updatePostComment",
  async (data, thunkAPI) => {
    try {
      const ref = doc(db, "posts", data.postId);

      const updatedPost = await updateDoc(ref, {
        comments: arrayUnion(data.comment),
      });
      console.log("document updated");
      return updatedPost;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updatePostLike = createAsyncThunk(
  "posts/updatePostLike",
  async (docId, thunkAPI) => {
    try {
      const ref = doc(db, "posts", docId);

      const updatedPost = await updateDoc(ref, { like: increment(1) });
      console.log("document updated");
      return updatedPost;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
