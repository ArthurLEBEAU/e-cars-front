import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search_paginate",
  initialState: {
    search: null,
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setPaginate, setSearch } = searchSlice.actions;