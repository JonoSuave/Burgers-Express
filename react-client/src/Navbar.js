import React, {Component, Fragment } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


class NavbarPage extends Component {
    render() {
      return (
        <Fragment>
          <Navbar color="faded" light expand="md">

            <NavbarBrand href="/">
              Burgers Express
            </NavbarBrand>
            <Nav className="mr-auto" navbar>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/burgers">Burgers</NavLink>
              </NavItem>
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/fries">
                  Fries
                </NavLink>
              </NavItem>
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/shakes">
                  Shakes
                </NavLink>
              </NavItem>


            </Nav>
          </Navbar>
        </Fragment>
      )
    }
  }

  export default NavbarPage