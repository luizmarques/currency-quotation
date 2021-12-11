import http from "../config/http";

export const getTopTenCurrencies = () => http.get("/currencies");
export const getCurrencyHistory = async (code) => http.get(`/currencies/dashboard/history/${code}`);