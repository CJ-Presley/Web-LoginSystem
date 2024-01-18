import { Container, ThemeProvider } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignUpFrom";
import {
  ABOUT_PATH,
  CONTACTS_PATH,
  DASHBOARD_PATH,
  INDEX_PATH,
  LOGIN_PATH,
  SIGNUP_PATH,
  NOT_FOUND_PATH,
} from "./constants/paths";
import Home from "./pages/Home";
import FooterComp from "./components/Footer";
import NavBar from "./components/Navbar";
// import { ThemeContext } from "./components/ThemeProvider";
// import { useContext } from "react";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Dash from "./pages/Dashboard";
import Error from "./pages/NotFound"
function App() {
  // const themeContext = useContext(ThemeContext);
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <Container>
          <Routes>
            <Route path={INDEX_PATH} element={<Home />} />
            <Route path={SIGNUP_PATH} element={<SignupForm />} />
            <Route path={LOGIN_PATH} element={<LoginForm />} />
            <Route path={CONTACTS_PATH} element={<Contacts />} />
            <Route path={ABOUT_PATH} element={<About />} />
            <Route path={DASHBOARD_PATH} element={<Dash />} />
            <Route path={NOT_FOUND_PATH} element={<Error />} />
          </Routes>
        </Container>
        <FooterComp />
      </ThemeProvider>
    </>
  );
}

export default App;
