import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #211b46;
height: 50px;
justify-content: center;
display: flex;
padding: .8rem;
`;

export const NavLink = styled(Link)`
color: #e6ecff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem; 
height: 100%;
cursor: pointer;
background='#e6ecff'
`;

export const Bars = styled(FaBars)`
display: none;
color: #e6ecff;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
}
`;