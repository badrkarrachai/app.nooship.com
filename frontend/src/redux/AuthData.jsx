import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const PageSlice = createSlice({
  name: "Page",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPage } = PageSlice.actions;

export const PageReducer = PageSlice.reducer;
