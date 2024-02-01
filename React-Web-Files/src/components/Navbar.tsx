import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../assets/Logo2.png";
// import { useContext } from "react";
// import { ThemeContext } from "./ThemeProvider";
// import Icon from "../assets/themeIcon.png";
import { WirelessCheckout }  from "@carbon/react/icons"

function NavBar() {
  // const themeContext = useContext(ThemeContext);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="fw-bold sticky-top fluid">
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
          <Nav>
            <Nav.Link href="/dash" className=" fw-bold" disabled>
              Dashboard
            </Nav.Link>
            <NavDropdown
              title="More Options"
              id="basic-nav-dropdown"
              className="fw-bold "
            >
              <NavDropdown.Item className="" href="/login">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item className="" href="/checkout">
                <WirelessCheckout /> Checkout
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="/"
                className="text-danger fw-bold"
                disabled
              >
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>

            {/* <Button
              variant="light"
              onClick={() =>
                themeContext?.setTheme(
                  themeContext?.theme === "dark" ? "light" : "dark"
                )
              }
            >
              <img
                src={Icon}
                alt="Button Icon"
                className="d-block align-middle"
              />
              {/* <a style={{ textTransform: "capitalize" }}>
                {themeContext?.theme} Mode
              </a>
            </Button> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
