import { apiSlice } from "../features/apiSlice";
// import { authSlice } from "@redux/feature/slices/authSlice";
// import { collapsedSlice } from "@redux/feature/slices/collapsedSlice";
// import { menuKeySlice } from "@redux/feature/slices/MenuKeySlice";
import { searchSlice } from "../features/slices/searchSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    // auth: authSlice.reducer,
    // menuKey: menuKeySlice.reducer,
    // collapsedState: collapsedSlice.reducer,
    searchSlice: searchSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});