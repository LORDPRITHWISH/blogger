import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
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
      state.status = action.payload.status;
    },
  },
});

export const { login, logout, authStatus } = authSlice.actions;

export default authSlice.reducer;
