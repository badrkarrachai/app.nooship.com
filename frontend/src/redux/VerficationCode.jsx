import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const VerCodeSlice = createSlice({
  name: "VerCode",
  initialState,
  reducers: {
    setVer: (state, action) => {
      state.value = action.payload;
    },
    restVer: (state, action) => {
      state.value = 0;
    },
  },
});

export const { setVer, restVer } = VerCodeSlice.actions;

export const VerCodeReducer = VerCodeSlice.reducer;
