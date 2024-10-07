import {FC} from "react";
import {Link, NavLink, Outlet} from "react-router-dom";
import "./Layout.css"

const setActive = ({isActive}):string => isActive ? "active" : "links"
export const Layout: FC = () => {
  return (
    <>
      <header className={"header"}>
        <NavLink to={"/"} className={setActive}>Home</NavLink>
        <NavLink to={"/posts"} className={setActive}>Blog</NavLink>
        <NavLink to={"/about"} className={setActive}>About</NavLink>
      </header>
      <Outlet/>
    </>
  )
}