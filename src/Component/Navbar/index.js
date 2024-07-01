import React from "react";
import {Link} from 'react-router-dom';
import {NavbarSection, LogoText, Logo, UlList, ListItem, Anchor, StyledLink}  from "./style.js"




const Navbar = () => {
    return(
      
        <NavbarSection>

            <div className="container">

                <Logo>
                    <LogoText>React Profile</LogoText>
                </Logo>

                

                <UlList>
                    <ListItem><StyledLink to="/">Home</StyledLink></ListItem>
                    <ListItem><Anchor href="#">Work</Anchor></ListItem>
                    <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                    <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                    <ListItem><Anchor href="#">About</Anchor></ListItem>
                    <ListItem><StyledLink to="/contact">Contact</StyledLink></ListItem>
                </UlList>

            </div>

        </NavbarSection>
    )
}

export default Navbar; 