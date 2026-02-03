import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { Info } from "./components/Info";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/info",
    Component: Info,
  },
]);
