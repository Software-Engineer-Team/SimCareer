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
  {
    path: "/skill-trees",
    element: DashBoard,
    type: "skill-trees",
  },
  {
    path: "/profile",
    element: DashBoard,
    type: "profile",
  },
  {
    path: "/price-list",
    element: DashBoard,
    type: "price-list",
  },
];
