import axios from "axios";
import { ApiError } from "./types";

const BASE_URL = "http://localhost:9000/api";

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const baseApi = {
  get: async <T>(url: string): Promise<T | ApiError> => {
    try {
      const response = await apiClient.get<T>(url);
      return response.data;
    } catch (e: any) {
      return {
        message: e.response?.data?.message || "An error occurred",
        error: e.response?.data?.error || "Unknown Error",
        statusCode: e.response?.status || 500,
      };
    }
  },

  post: async <T, D>(url: string, data: D): Promise<T | ApiError> => {
    try {
      const response = await apiClient.post<T>(url, data);
      return response.data;
    } catch (e: any) {
      return {
        message: e.response?.data?.message || "An error occurred",
        error: e.response?.data?.error || "Unknown Error",
        statusCode: e.response?.status || 500,
      };
    }
  },

  put: async <T, D>(url: string, data: D): Promise<T | ApiError> => {
    try {
      const response = await apiClient.put<T>(url, data);
      return response.data;
    } catch (e: any) {
      return {
        message: e.response?.data?.message || "An error occurred",
        error: e.response?.data?.error || "Unknown Error",
        statusCode: e.response?.status || 500,
      };
    }
  },
};
