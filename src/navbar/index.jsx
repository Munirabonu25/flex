import React from "react";
import logo from "../assets/icons/logo-icon.svg";

import
    {
        SiteHeader,
        SiteNav,
        NavContent,
        Logo,
        NavList,
        NavItem,
        NavLink,
        NavBtn,
    } from "./styled"

class Navbar extends React.Component
{
    render ()
    {
        return (
            <SiteHeader>
                <SiteNav>
                    <NavContent>
                        <Logo src={ logo } alt="logo" />
                        <NavList>
                            <NavItem>
                                <NavLink href="https://echo.htmlacademy.ru">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://echo.htmlacademy.ru">
                                    Properties
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://echo.htmlacademy.ru">
                                    Contacts
                                </NavLink>
                            </NavItem>
                        </NavList>
                        <NavBtn>Login</NavBtn>
                    </NavContent>
                </SiteNav>
            </SiteHeader>
        );
    }
}

export default Navbar;
