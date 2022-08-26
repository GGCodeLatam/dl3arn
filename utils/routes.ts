import Landing from "pages";
import NotFound from "pages/404";
import ChangePassword from "pages/auth/change/password";
import Login from "pages/auth/login";
import Signup from "pages/auth/signup";
import Course from "pages/course/[id]";
import Favorites from "pages/favorites";
import Home from "pages/home";
import Profile from "pages/profile";
import QuienesSomos from "pages/quienes-somos";
import Roadmap from "pages/roadmap";

import { RouteObject } from "react-router";
import { Override } from "./types/utility";

type Route = Override<
  RouteObject,
  { path: string; element: (_: any) => JSX.Element | null }
>;

type Pages = {
  landing: Route;
  roadmap: Route;
  quienes: Route;

  home: Route;
  course: Route;
  profile: Route;
  favorites: Route;

  login: Route;
  signup: Route;
  password: Route;

  notfound: Route;
};

const routes: Pages = {
  landing: {
    path: "/",
    element: Landing,
  },
  roadmap: {
    path: "/roadmap",
    element: Roadmap,
  },
  quienes: {
    path: "/quienes-somos",
    element: QuienesSomos,
  },

  home: {
    path: "/home",
    element: Home,
  },
  course: {
    path: "/course/:id",
    element: Course,
  },
  profile: {
    path: "/profile",
    element: Profile,
  },
  favorites: {
    path: "/favorites",
    element: Favorites,
  },

  login: {
    path: "/auth/login",
    element: Login,
  },
  signup: {
    path: "/auth/signup",
    element: Signup,
  },
  password: {
    path: "/auth/change/password",
    element: ChangePassword,
  },

  notfound: {
    path: "*",
    element: NotFound,
  },
};

export default routes;
