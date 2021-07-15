// Import
import axios from "axios";
import { store } from "@/store";
import { apiURL } from "@/utils/core/config";

// Create
const service = axios.create({
  baseURL: apiURL,
});

// Token
if (store.getters.getUser) {
  service.defaults.headers.common["Authorization"] =
    "Bearer " + store.getters.getToken;
}

// Request Interceptor
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
service.interceptors.response.use(
  (response):any => {
    return {valid: true, value: response};
  },
  (error):any => {
    let errors = error;

    if (error.response) {
      // Session Expired
      if (401 === error.response.status) {
        errors = error.response.data.message;
        // store.dispatch('logOut')
      }

      // Errors from backend
      if (error.response.status == 422) {
        errors = "";
        for (const errorKey in error.response.data.errors) {
          errors += "\n";
          errors += error.response.data.errors[errorKey].detail + "<br>";
        }
      }

      // Backend error
      if (500 === error.response.status) {
        errors = error.response.data.message;
      }

      // Server down
      if (503 === error.response.status) {
        errors = error.response.data.message;
      }

      // 404
      if (error.response.status == 404) {
        errors = "Page not found!";
      }
    }

    return {valid: false, value: error.message};
  }
);

// Export axios
export {service};
