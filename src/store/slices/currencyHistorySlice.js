import { createSlice } from "@reduxjs/toolkit";
import { getCurrencyHistory } from "../../config/storage";

const currencyHistory = JSON.parse(getCurrencyHistory());
const initialState = {
  currencyHistory: !!currencyHistory,
  data: currencyHistory ? currencyHistory : {},
};

export const slice = createSlice({
  name: "currencyHistory",
  initialState,
  reducers: {
    updateCurrencyHistory: (state, action) => {
      state.currencyHistory = true;
      state.currencyHistory = action.payload;
    },
  },
});


export const { updateCurrencyHistory } = slice.actions;
export default slice.reducer;
