import { createSlice } from "@reduxjs/toolkit";

const CheckOutSlice = createSlice({
  name: "checkout",
  initialState: {
    isOpen: false,
  },
  reducers: {
    open: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { open } = CheckOutSlice.actions;
export default CheckOutSlice.reducer;
