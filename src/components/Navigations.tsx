import { NavLink } from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu";
import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

export function Navigation() {
  const [showNav, setShowNav] = useState(false);
  const { adminLogin, setAdminLogin } = useGlobalContext();

  const menuItems = [
    { path: "/", label: "HEM" },
    { path: "/Booking", label: "BOKA/RESERVE" },
    { path: "/Contact", label: "KONTAKT" },
  ];

  if (showNav) {
    setShowNav(!showNav);
  }

  const OnClickLogOut = (): void => {
    if (adminLogin) {
      setAdminLogin(false);
    }
  };

  return (
    <>
      <section className="container--navigation">
        <HamburgerMenu menuItems={menuItems} showNav={showNav} />
        <section className={!showNav ? "container--desktopMenu" : ""}>
          <section className="container--menuLogo__white">
            <img className="menuLogo__white" src="/src/assets/logoWhite.png" alt="" />
          </section>
          <nav className="desktopMenu">
            <ul className="desktopMenu--list">
              {menuItems.map((menuItem, index) => (
                <li key={index}>
                  <NavLink className="desktopMenu--listLinks" to={menuItem.path}>
                    {menuItem.label}
                  </NavLink>
                </li>
              ))}
              {adminLogin ? (
                <li>
                  <NavLink className="desktopMenu--listLinks" to={"/SignIn"}>
                    ADMIN
                  </NavLink>
                </li>
              ) : (
                ""
              )}

              <li>
                <NavLink className="desktopMenu--listLinks" to={adminLogin ? "/" : "/SignIn"}>
                  <button className="desktopMenu--btn" onClick={OnClickLogOut}>
                    {" "}
                    {adminLogin ? "LOGGA UT" : "LOGGA IN"}
                  </button>
                </NavLink>
              </li>
            </ul>
          </nav>
        </section>
      </section>
    </>
  );
}
