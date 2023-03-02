import React from "react";
import { 
    Footer,
    FooterLink,
} from "./FooterElements";

const TheFooter = () => {
    return (
        <>
            <Footer>
                    <FooterLink to ="/contact-us" activeStyle>
                        Contact Us
                    </FooterLink>
            </Footer>
        </>
    );
};

export default TheFooter;





