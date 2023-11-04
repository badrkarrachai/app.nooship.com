import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "C",
};

export const UserRoleSlice = createSlice({
  name: "UserRole",
  initialState,
  reducers: {
    setUserRole: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const CominFromRightBarSlice = createSlice({
  name: "CominFromRightBar",
  initialState,
  reducers: {
    setCominFromRightBar: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCominFromRightBar } = CominFromRightBarSlice.actions;

export const CominFromRightBarReducer = CominFromRightBarSlice.reducer;

export const { setUserRole } = UserRoleSlice.actions;

export const UserRoleReducer = UserRoleSlice.reducer;
