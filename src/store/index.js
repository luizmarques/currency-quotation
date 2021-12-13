import { configureStore } from "@reduxjs/toolkit";
import currencyHistoryReducer from "./slices/currencyHistorySlice";
import topTenCurrencyReducer from "./slices/currencyTopTenSlice";
import userReducer from "./slices/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    currencyHistory: currencyHistoryReducer,
    topTenCurrency: topTenCurrencyReducer,
  },
});
