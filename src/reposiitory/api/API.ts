import axios from "axios";

export const API = axios.create({
  baseURL: "https://reqres.in/api/",
  timeout: 3000,
  headers: { "Content-Type": "application/json","Cache-Control":" max-age=31536000" },
});

export const endpoints = {
  users: "users/",
};
