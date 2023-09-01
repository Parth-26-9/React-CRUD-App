import { configureStore } from "@reduxjs/toolkit";
import  userDetail  from "../Slices/userDetailsSlice";
export const store = configureStore({
  reducer: {
    app:userDetail,
  },
});