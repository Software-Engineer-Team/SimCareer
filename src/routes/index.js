import { LoginPage, DashBoard } from "@pages/index";

export const routes = [
  {
    path: "/login",
    element: LoginPage,
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
