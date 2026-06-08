import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Destinations } from "./pages/Destinations";
import { Packages } from "./pages/Packages";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "destinations", Component: Destinations },
      { path: "packages", Component: Packages },
      { path: "contact", Component: Contact },
    ],
  },
]);
