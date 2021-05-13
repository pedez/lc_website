import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import Calendly from './Calendly';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
    NavLinksChangePage 
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>
                            Upself
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about"
                                smooth={true} duration={500} spy={true} exact='true'
                                >About Me</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="problems"
                                smooth={true} duration={500} spy={true} exact='true'/* offset={-80}*/
                                >Problems To Fix</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="benefits"
                                smooth={true} duration={500} spy={true} exact='true'
                                >Benefits</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinksChangePage to="/contact"
                                smooth={true} duration={500} spy={true} exact='true'
                                >Contact Me</NavLinksChangePage>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/pedezro/consulting-session'});return false;">Get Free Call</a>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
            
        </>
    )
}

export default Navbar;
