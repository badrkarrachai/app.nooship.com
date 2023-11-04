import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "none",
};

export const RightBarStatusSlice = createSlice({
  name: "RightBarStatus",
  initialState,
  reducers: {
    setToActive: (state, action) => {
      state.value = "true";
    },
    setToInActive: (state, action) => {
      state.value = "false";
    },
    setToNone: (state, action) => {
      state.value = "none";
    },
  },
});
export const ExpectedParcelEditeSlice = createSlice({
  name: "ExpectedParcelEdite",
  initialState,
  reducers: {
    setExpectedParcelEdite: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setExpectedParcelEdite } = ExpectedParcelEditeSlice.actions;

export const ExpectedParcelEditeReducer = ExpectedParcelEditeSlice.reducer;

export const { setToActive, setToInActive, setToNone } =
  RightBarStatusSlice.actions;

export const RightBarStatusReducer = RightBarStatusSlice.reducer;
