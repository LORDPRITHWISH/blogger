import React from "react";
import Container from "../container/Container";
import { useSelector } from "react-redux";
import Logo from "../Logo";
import { Link, NavLink, useNavigate } from "react-router";
import LogoutButt from "./LogoutButt";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);

  const navigator = useNavigate();

  const navitems = [
    {
      name: "Home",
      slug: "/",
      status: true,
    },
    {
      name: "Profile",
      slug: "/profile",
      status: authStatus,
    },
    {
      name: "All posts",
      slug: "/posts",
      status: authStatus,
    },
    {
      name: "Create post",
      slug: "/create-post",
      status: authStatus,
    },
  ];

  const regisbutton = [
    {
      name: "Login",
      slug: "/login",
    },
    {
      name: "Signup",
      slug: "/signup",
    },
  ];

  return (
    <div>
      <Container>
        <nav className="flex justify-between items-center py-1">
          <Link to="/">
            <Logo size={16} className=" rounded-xl" />
          </Link>
          <ul className="flex space-x-5">
            {navitems.map((item, index) => {
              if (item.status) {
                return (
                  <li key={index}>
                    <NavLink to={item.slug}>
                      {({ isActive }) => <span className={`${isActive ? "text-indigo-600 text-2xl font-extrabold" : "text-slate-100 text-xl font-semibold"}`}>{item.name}</span>}
                    </NavLink>
                  </li>
                );
              }
            })}
          </ul>
          <ul className="flex space-x-5">
            {authStatus ? (
              <LogoutButt />
            ) : (
              regisbutton.map((item, index) => (
                <li key={index}>
                  <button className="bg-indigo-600 text-slate-100 px-3 py-1 rounded-md" onClick={() => navigator(item.slug)}>
                    {item.name}
                  </button>
                </li>
              ))
            )}
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
