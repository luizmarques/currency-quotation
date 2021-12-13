import { createSlice } from "@reduxjs/toolkit";
import { getTopTenCurrency } from "../../config/storage";

const topTenCurrency = JSON.parse(getTopTenCurrency());
const initialState = {
  topTenCurrency: !!topTenCurrency,
  data: topTenCurrency ? topTenCurrency : {},
};

export const slice = createSlice({
  name: "topTenCurrency",
  initialState,
  reducers: {
    updateTopTenCurrency: (state, action) => {
      state.topTenCurrency = true;
      state.topTenCurrency = action.payload;
    },
  },
});

export const { updateTopTenCurrency } = slice.actions;
export default slice.reducer;
