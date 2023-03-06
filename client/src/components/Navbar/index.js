import React from 'react';
import {
    Bars, Nav, NavBtn,
    NavBtnLink, NavLink, NavMenu
} from './NavbarElements';

const AppNavbar = () => {

    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/about' activestyle="true">
                        About
                    </NavLink>
                    <NavLink to='/' activestyle="true">
                        Homepage
                    </NavLink>
                    <NavLink to='/lists' activestyle="true">
                        List Button
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink>Login/Sign Up</NavBtnLink>
                </NavBtn>
            </Nav>
            
        </>
    );
};

export default AppNavbar;
