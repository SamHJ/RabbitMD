// Import
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import {MerchantRoute} from "./MerchantRoute";
import {DriverRoute} from "./DriverRoute";
import { GeneralRoute } from "./GeneralRoute";
import { store } from "@/store";

const routes: Array<RouteRecordRaw> = [
  ...GeneralRoute,
  ...MerchantRoute, 
  ...DriverRoute
];

// Start vue router
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

// Middlewares
router.beforeEach((to, from, next) => {

  // Redirect to route
  const redirectToRoute = function (name: string) {
    if (name === from.name) {
      next();
      return;
    }
    next({ name: name });
  };
  
  // Get logged user
  const user = store.getters.getUser;

  // Check if access token expired
  if (user) {
    const currentDateTime = new Date().getTime();
    if (currentDateTime > user.expiryDate) {
      store.dispatch("logOut");
      return redirectToRoute("login");
    }
  }

  // Auth
  if (to.meta.auth) {
    if (user) return next();
    else return redirectToRoute("login");
  }

  next();
});

// Export
export default router;
