import axios from "axios";
import { CreateUserForm } from "./interfaces";

export const baseURL = "http://localhost:8080/";
// so by using this url, we can use the backend logic
const API = axios.create({
  baseURL,
});

// User routes
export const getAllUsers = () => API.get("users/all");
export const addUser = (formData: CreateUserForm) => API.post("users/add", formData, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});