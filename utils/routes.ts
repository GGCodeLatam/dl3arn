import { RouteObject } from "react-router";
import { Override } from "./types/utility";

type Route = Override<RouteObject, { path: string }>;

type Page =
  | "landing"
  | "roadmap"
  | "quienes"
  | "home"
  | "course"
  | "profile"
  | "favorites"
  | "login"
  | "signup"
  | "password"
  | "notfound";
type Pages = { [key in Page]: Route };

const routes: Pages = {
  landing: {
    path: "/",
  },
  roadmap: {
    path: "/roadmap",
  },
  quienes: {
    path: "/quienes-somos",
  },

  home: {
    path: "/home",
  },
  course: {
    path: "/course/:id",
  },
  profile: {
    path: "/profile",
  },
  favorites: {
    path: "/favorites",
  },

  login: {
    path: "/auth/login",
  },
  signup: {
    path: "/auth/signup",
  },
  password: {
    path: "/auth/change/password",
  },

  notfound: {
    path: "*",
  },
};

export default routes;
