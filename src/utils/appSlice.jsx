import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    hamburgerState: false,
  },
  reducers: {
    triggerHamburger: (state) => {
      state.hamburgerState = !state.hamburgerState;
    },
  },
});

export const { triggerHamburger } = appSlice.actions;
export default appSlice.reducer;
