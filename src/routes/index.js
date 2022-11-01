import { LoginPage, DashBoard } from "@pages/index";

export const routes = [
  {
    path: "/login",
    element: LoginPage,
    type: "login",
  },
  {
    path: "/register",
    element: LoginPage,
    type: "register",
  },
  {
    path: "/",
    element: LoginPage,
  },
  {
    path: "/dash-board",
    element: DashBoard,
  },
];
