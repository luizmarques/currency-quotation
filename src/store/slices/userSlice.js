import { createSlice } from "@reduxjs/toolkit";
import http from "../../config/http";
import { getUser } from "../../config/storage";

const user = JSON.parse(getUser());
if (user?.token) {
  http.defaults.headers["Authorization"] = `Bearer ${user?.token}`;
}
const initialState = {
  userLoggedIn: !!user,
  user: user ? user : {},
  favoriteCurrency: [],
};

export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.userLoggedIn = true;
      state.user = action.payload;
    },
    favoriteCurrency: (state, action) => {
      const response = state.user.favoriteCurrency.find((item) => {
        return item == action.payload
      })
      if (!response || undefined) {
        state.user.favoriteCurrency.push(action.payload)
      } else {
        const favorite = state.user.favoriteCurrency.indexOf(response)
        if (favorite > -1) {
          state.user.favoriteCurrency.splice(favorite, 1)
        }
      }
    }
  },
});

export const { updateUser, favoriteCurrency } = slice.actions;
export default slice.reducer;
