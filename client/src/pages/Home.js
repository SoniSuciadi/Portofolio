import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <Outlet />
    </Fragment>
  );
};
