import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../assets/Space6.png";
// import { useContext } from "react";
// import { ThemeContext } from "./ThemeProvider";
// import Icon from "../assets/themeIcon.png";

function NavBar() {
  // const themeContext = useContext(ThemeContext);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="sticky-top">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top rounded"
              alt="Logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contacts">Contacts</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/dash">Dashboard</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>

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
