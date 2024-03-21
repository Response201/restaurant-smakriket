import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Booking } from "./pages/Booking";
import { Contact } from "./pages/Contact";
import { Layout } from "./Layout";
import { SignIn } from "./pages/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/Booking",
        element: <Booking />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/SignIn",
        element: <SignIn />,
      },
    ],
  },
]);
