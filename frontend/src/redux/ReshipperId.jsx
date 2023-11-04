import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const IdReshipperSlice = createSlice({
  name: "ReshipperId",
  initialState,
  reducers: {
    setIdReshipper: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setIdReshipper } = IdReshipperSlice.actions;

export const IdReshipperReducer = IdReshipperSlice.reducer;
