import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const ProfileUpdateIndecatorSlice = createSlice({
  name: "ProfileUpdateIndecator",
  initialState,
  reducers: {
    setProfileUpdateIndecator: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setProfileUpdateIndecator } =
  ProfileUpdateIndecatorSlice.actions;

export const ProfileUpdateIndecatorSliceReducer =
  ProfileUpdateIndecatorSlice.reducer;
