import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {}, // for register user object
  loginInfo: {}, // for login user object
  savedInfo: [], // for user collection
};

const authReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerSuccess: (state, action) => {
      state.userInfo = action.payload;
    },
    loginSuccess: (state, action) => {
      state.loginInfo = action.payload;
    },
    savedSuccess: (state, action) => {
      state.savedInfo = action.payload;
    },
    clearLoginInfo: (state) => {
      state.loginInfo = {};
    },
  },
});

export const { loginSuccess, registerSuccess, savedSuccess, clearLoginInfo } =
  authReducer.actions;

export default authReducer.reducer;
