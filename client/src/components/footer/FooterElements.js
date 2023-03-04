import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Footer = styled.nav`
background: #211b46;
height: 85px;
display: flex;
justify-content: space-between;
z-index: 12;
justify-content: center;
bottom: 0;
position: relative;
width: 100%;
`;


export const FooterLink = styled(Link)`
color: #e6ecff;
display: flex;
align-items: center;
text-decoration: none;
height: 100%;
cursor: pointer;
&.active {
	color: #e6ecff;
}
`;