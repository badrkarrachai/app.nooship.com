import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const AreYouSureDataBaseSlice = createSlice({
  name: "DataBaseAreouSure",
  initialState,
  reducers: {
    setDataAreYouSure: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const TitleAreYouSlice = createSlice({
  name: "TitleAreYou",
  initialState,
  reducers: {
    setTitleareYou: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const ButtonMessageSlice = createSlice({
  name: "ButtonMessage",
  initialState,
  reducers: {
    setButtonMessage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const ImageAreYouSlice = createSlice({
  name: "ImageAreYou",
  initialState,
  reducers: {
    setImageAreYou: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const UpdateExpParcelSlice = createSlice({
  name: "UpdateExpParce",
  initialState,
  reducers: {
    setUpdateExpParce: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const UpdateInvParcelSlice = createSlice({
  name: "UpdateInvParcel",
  initialState,
  reducers: {
    setUpdateInvParcel: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const ButtonTypeSlice = createSlice({
  name: "ButtonType",
  initialState,
  reducers: {
    setButtonType: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUpdateInvParcel } = UpdateInvParcelSlice.actions;

export const UpdateInvParcelReducer = UpdateInvParcelSlice.reducer;

export const { setButtonType } = ButtonTypeSlice.actions;

export const ButtonTypeReducer = ButtonTypeSlice.reducer;

export const { setUpdateExpParce } = UpdateExpParcelSlice.actions;

export const UpdateExpParcelReducer = UpdateExpParcelSlice.reducer;

export const { setImageAreYou } = ImageAreYouSlice.actions;

export const ImageAreYouReducer = ImageAreYouSlice.reducer;

export const { setButtonMessage } = ButtonMessageSlice.actions;

export const ButtonMessageReducer = ButtonMessageSlice.reducer;

export const { setTitleareYou } = TitleAreYouSlice.actions;

export const TitleAreYouReducer = TitleAreYouSlice.reducer;

export const { setDataAreYouSure } = AreYouSureDataBaseSlice.actions;

export const AreYouSureDataReducer = AreYouSureDataBaseSlice.reducer;
