// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isConnected: false,
    token: null,
    userProfile: {},
  },
  reducers: {
    setConnexionFlag: (state, action) => {
      state.isConnected = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const { setConnexionFlag, setToken, setUserProfile } = userSlice.actions;

export default userSlice.reducer;
