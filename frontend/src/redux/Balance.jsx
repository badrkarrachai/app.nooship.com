import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const BalanceSlice = createSlice({
  name: "Balance",
  initialState,
  reducers: {
    setBalance: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const UpdateBalanceSlice = createSlice({
  name: "UpdateBalance",
  initialState,
  reducers: {
    setUpdateBalance: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUpdateBalance } = UpdateBalanceSlice.actions;

export const UpdateBalanceReducer = UpdateBalanceSlice.reducer;

export const { setBalance } = BalanceSlice.actions;

export const BalanceReducer = BalanceSlice.reducer;
