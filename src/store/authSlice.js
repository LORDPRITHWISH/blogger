import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
  loaded: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
    authStatus: (state, action) => {
      console.log(action.payload);
      state.status = true;
      state.status = action.payload.status;
    },
    loadend: (state) => {
      state.loaded = true;
    },
  },
});

export const { login, logout, authStatus, loadend } = authSlice.actions;

export default authSlice.reducer;
