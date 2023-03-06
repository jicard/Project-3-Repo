import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const AppNavbar = () => {

    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/' activeStyle>
                        Homepage
                    </NavLink>
                    <NavLink to='/lists' activeStyle>
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
