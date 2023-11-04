import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const LoadingSlice = createSlice({
  name: "Loading",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.value = true;
    },
    setLoadingFalse: (state, action) => {
      state.value = false;
    },
  },
});

export const getAddressSlice = createSlice({
  name: "AdressStatus",
  initialState,
  reducers: {
    setSTadd: (state, action) => {
      state.value = true;
    },
    unsetSTadd: (state, action) => {
      state.value = false;
    },
  },
});

export const AreYouSureSlice = createSlice({
  name: "AreYouSure",
  initialState,
  reducers: {
    setAreSure: (state, action) => {
      state.value = true;
    },
    unsetAreYouSure: (state, action) => {
      state.value = false;
    },
  },
});

export const { setAreSure, unsetAreYouSure } = AreYouSureSlice.actions;

export const AreYouSureReducer = AreYouSureSlice.reducer;

export const { setLoading, setLoadingFalse } = LoadingSlice.actions;

export const LoadingReducer = LoadingSlice.reducer;

export const { setSTadd, unsetSTadd } = getAddressSlice.actions;

export const AdressStatusReducer = getAddressSlice.reducer;
