import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "none",
};

export const SideBarStatusSlice = createSlice({
  name: "SideBarStatus",
  initialState,
  reducers: {
    setToActiveSide: (state, action) => {
      state.value = "true";
    },
    setToInActiveSide: (state, action) => {
      state.value = "false";
    },
    setToNoneSide: (state, action) => {
      state.value = "none";
    },
  },
});

export const { setToActiveSide, setToInActiveSide, setToNoneSide } =
  SideBarStatusSlice.actions;

export const SideBarStatusReducer = SideBarStatusSlice.reducer;