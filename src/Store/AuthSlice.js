import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLogedin: false,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLogedin = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLogedin = false;
    },
    register: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, register } = AuthSlice.actions;

export default AuthSlice.reducer;
