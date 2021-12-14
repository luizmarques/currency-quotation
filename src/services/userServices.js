import http from "../config/http";

export const registerUser = (values) => http.post("/users/register", values);
export const loginUser = (values) => http.post("/users/login", values);
export const updateUserFavoriteCurrency = (body) => http.patch(`/users/favoriteCurrency/${body.email}`, body);