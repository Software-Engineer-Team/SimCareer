import { LoginPage, DashBoard, Judgements } from "@pages/index";

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
    path: "/forgot-password",
    element: LoginPage,
    type: "forgot-password",
  },
  {
    path: "/",
    element: LoginPage,
  },
  {
    path: "/dash-board",
    element: DashBoard,
  },
  {
    path: "/judgements",
    element: Judgements,
  },
];
