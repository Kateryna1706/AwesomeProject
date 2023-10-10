import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../../config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
  "posts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await getDocs(collection(db, "posts"));
      let posts = [];
      response.forEach((doc) => console.log(`${doc.id} =>`, doc.data()));
      response.map((post) => {
        const id = post.id;
        const data = post.data();
        const onePost = {
          id,
          postPhoto: data.postPhoto,
          postTitle: data.postTitle,
          location: data.location,
          comments: data.comments,
          like: data.like,
        };
        posts.push(onePost);
      });

      return posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (post, thunkAPI) => {
    try {
      const response = await addDoc(collection(db, "posts"), {
        timestamp: serverTimestamp(),
        ...post,
      });
      console.log("Document written with ID: ", post.id);
      const id = response.id;
      const data = response.getDoc();
      console.log(`data ${data}`);
      return {
        id,
        data,
      };
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
        comments: arrayUnion({ timestamp: serverTimestamp(), ...data.comment }),
      });
      console.log("document comments updated");
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
      console.log("document like updated");
      return updatedPost;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
