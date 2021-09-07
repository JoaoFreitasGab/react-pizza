import React from "react";
import { Bars, Nav, NavIcon, NavLink } from "./NavBarElements";

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Pizzaria Camargo's</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars></Bars>
                </NavIcon>
            </Nav>
        </>
    )
}

export default NavBar