import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "none",
};

export const NotificationBarStatusSlice = createSlice({
  name: "NotificationBarStatus",
  initialState,
  reducers: {
    setToActiveNotification: (state, action) => {
      state.value = "true";
    },
    setToInActiveNotification: (state, action) => {
      state.value = "false";
    },
    setToNoneNotification: (state, action) => {
      state.value = "none";
    },
  },
});

export const {
  setToActiveNotification,
  setToInActiveNotification,
  setToNoneNotification,
} = NotificationBarStatusSlice.actions;

export const NotificationBarStatusReducer = NotificationBarStatusSlice.reducer;
