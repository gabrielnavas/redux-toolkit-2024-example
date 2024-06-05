import { combineReducers } from "@reduxjs/toolkit";

import postSlice from "./features/postSlice";

export const rootReducer = combineReducers({
  posts: postSlice
})