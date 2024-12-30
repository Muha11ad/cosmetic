import React, { JSX } from "react";
import { NavbarVertical } from "./components/navbar-vertical";
import { NavbarHorizontal } from "./components/navbar-horizontal";
import { NavbarHorizontalAuthorized } from "./components/navbar-horizontal-authorized";
import { NavbarProps, TypesNavbar } from "../types";

function printNavbar({ type }: NavbarProps): JSX.Element {
  if (type === TypesNavbar.VERTICAL) return <NavbarVertical />;
  else if (type === TypesNavbar.HORIZONTAL) return <NavbarHorizontal />;
  else return <NavbarHorizontalAuthorized />;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  return printNavbar(props);
};
