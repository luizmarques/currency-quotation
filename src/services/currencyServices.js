import http from "../config/http";

export const getTopTenCurrencies = () => http.get("/currencies");
export const getCurrencyHistory = (code) => http.get(`/currencies/dashboard/history/${code}`);

