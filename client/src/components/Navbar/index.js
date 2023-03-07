import React from 'react';
import { Nav, NavLink, NavMenu } from './NavbarElements';

const AppNavbar = () => {

    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to='/' activestyle="true">
                        Homepage
                    </NavLink>
                    {/* We can implement this if we put a contact for on the "ContactusPage" */}
                    {/* <NavLink to='/about-us' activestyle="true">
                        About
                    </NavLink> */}
                    <NavLink to='/dashboard' activestyle="true">
                        Dashboard
                    </NavLink>
                    <NavLink to='/settings' activestyle="true">
                        Account Settings
                    </NavLink>
                </NavMenu>
            </Nav>
            
        </>
    );
};

export default AppNavbar;
