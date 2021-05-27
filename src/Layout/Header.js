import React, { useState, useContext, Fragment } from "react"

import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav, NavItem, NavLink, NavbarText,
    Collapse,
} from "reactstrap"

import { Link } from "react-router-dom"

import UserContext from "../context/UserContext"

const Header = () => {

    const context = useContext(UserContext);

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <Navbar color="info" light expand="md">
            <NavbarBrand><Link to="/" className="text-white">Gitfire App</Link></NavbarBrand>
            <NavbarText className="text-white">
                {
                    context.user?.email ? context.user.email : ""
                }
            </NavbarText>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {
                        context.user ? 
                        (
                            <NavItem>
                                <NavLink className="text-white" onClick={() => {
                                    context.setUser(null)
                                }}>
                                    Logout
                        </NavLink>
                            </NavItem>
                        ) : (
                            <Fragment>
                                <NavItem>
                                    <NavLink className="text-white" tag={Link} to="/signup">
                                        Signup
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="text-white" tag={Link} to="/signin">
                                        Signin
                                    </NavLink>
                                </NavItem>
                            </Fragment>
                        )
                    }
                </Nav>
            </Collapse >
        </Navbar >
    )
}

export default Header;