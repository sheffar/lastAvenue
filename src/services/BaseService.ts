import axios from "axios";
import { appConfig } from "../config/app-config.ts";
import { store } from "@/store/index";

export const baseURL = import.meta.env.PROD
  ? appConfig.production.baseURL
  : appConfig.development.baseURL;

const ApiClient = (requiresToken?: boolean) => {
  const token = (store?.getState()?.auth?.u_data?.token as string) ?? "";

  const axiosInstance = axios.create({
    baseURL,
    withCredentials: false,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  axiosInstance.interceptors.request.use(
    function (config) {
      if (requiresToken) config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      throw error;
    },
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (e) => {
      if (e?.response?.status == 401) {
        // log out user
      }

      throw e;
    },
  );
  return axiosInstance;
};

export const BaseService = {
  appClient: ApiClient,
};
