import { combineReducers } from "@reduxjs/toolkit";
import { auth } from "./auth.ts";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

export const rootReducer = combineReducers({
  auth: persistReducer(
    { key: "auth", storage, blacklist: ["logginIn", "loginRejectedError"] },
    auth.reducer,
  ),
});
