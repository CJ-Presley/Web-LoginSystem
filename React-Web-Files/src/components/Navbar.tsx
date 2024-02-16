import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../assets/Logo2.png";
// import { useContext } from "react";
// import { ThemeContext } from "./ThemeProvider";
// import Icon from "../assets/themeIcon.png";
import { WirelessCheckout } from "@carbon/react/icons";
import { AccountDetailsContext } from "./accountProvider";
import { useContext, useState } from "react";

function NavBar() {
  // const themeContext = useContext(ThemeContext);
  const accountDetailsContext = useContext(AccountDetailsContext);
  const [buttonState, setButttonState] = useState("");

  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        className="fw-bold sticky-top bg-body-tertiary"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              width="200"
              height="40"
              className="d-inline-block align-top rounded"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="" href="/menu">
                Menu
              </Nav.Link>
              <Nav.Link className="" href="/about">
                About
              </Nav.Link>
              <Nav.Link className="" href="/bookings">
                Bookings
              </Nav.Link>
              <Nav.Link className="" href="/contacts">
                Contacts
              </Nav.Link>
            </Nav>
            {/* <span className="text-light">
              Role {String(accountDetailsContext?.accountDetails?.role)}
            </span> */}
            <Nav>
              <Nav.Link
                href="/PqRsTuV12345678"
                className=" fw-bold"
                disabled={
                  accountDetailsContext?.accountDetails?.role ? false : true
                }
              >
                Dashboard
              </Nav.Link>
              <NavDropdown
                title="More Options"
                id="basic-nav-dropdown"
                className="fw-bold "
              >
                <NavDropdown.Item
                  className=""
                  href="/login"
                  disabled={
                    accountDetailsContext?.accountDetails ? true : false
                  }
                >
                  Login: {accountDetailsContext?.accountDetails?.username}
                </NavDropdown.Item>
                <NavDropdown.Item className="" href="/XyZ9876ABcd3210EfGh">
                  <WirelessCheckout /> Checkout
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="/"
                  className="text-danger fw-bold"
                  disabled={
                    accountDetailsContext?.accountDetails ? false : true
                  }
                  onClick={() => accountDetailsContext?.setAccountDetails(null)}
                >
                  Sign Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
