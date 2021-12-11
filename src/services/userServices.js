import http from "../config/http";

export const registerUser = (values) => http.post("/users/register", values);
export const loginUser = (values) => http.post("/users/login", values);
export const updateUserFavoriteCurrency = (code) => http.post(`/currencies/dashboard/history/${code}`);

