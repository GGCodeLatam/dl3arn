import { Override } from "./types/utility";

type Route = { path: string };

type Page =
  | "about"
  | "course"
  | "favorites"
  | "home"
  | "landing"
  | "login"
  | "notfound"
  | "password"
  | "profile"
  | "quienes"
  | "roadmap"
  | "signup";
type Pages = { [key in Page]: Route };

const routes: Pages = {
  landing: {
    path: "/",
  },
  about: {
    path: "/about",
  },
  roadmap: {
    path: "/about/roadmap",
  },
  quienes: {
    path: "/about/quienes-somos",
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
