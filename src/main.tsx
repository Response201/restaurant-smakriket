import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./scss/styles.scss"
import { RouterProvider } from "react-router-dom";
import { router } from "./Router.tsx";
import {  GlobalProvider } from "./context/GlobalContext.tsx";
import {  BookingProvider } from "./context/BookingContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProvider > 
    <BookingProvider>
    <RouterProvider router={router}></RouterProvider>
  </BookingProvider>
    </GlobalProvider>
  </React.StrictMode>
);
