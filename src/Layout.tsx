import { Outlet } from "react-router-dom";
import { Navigation } from "./components/Navigations";

export const Layout = () => {
  return (
    <>
      <header>{<Navigation />}</header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
