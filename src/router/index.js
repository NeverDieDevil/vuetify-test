import { createRouter, createWebHashHistory } from "vue-router";
import DashboardLayout from "../pages/dashboard/layout/DashboardLayout.vue";
import Dashboard from "../pages/Dashboard.vue";
import User from "../pages/User.vue";
import Details from "../pages/Details.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "user",
        name: "User",
        component: User,
      },
      {
        path: "userdetailsform",
        name: "User Details Form",
        component: Details,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
