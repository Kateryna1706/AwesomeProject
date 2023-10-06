import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./posts/postsSlice";
import { authReducer } from "./auth/authSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import AsyncStorage from "@react-native-async-storage/async-storage";

const authPersistConfig = {
  key: "auth",
  storage: AsyncStorage,
  whitelist: ["token"],
};

const postsPersistConfig = {
  key: "posts",
  storage: AsyncStorage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    posts: persistReducer(postsPersistConfig, postsReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
