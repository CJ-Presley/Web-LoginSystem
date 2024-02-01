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
  MENU_PATH,
  BOOKING_PATH,
  CLASS_PATH,
  TABLE_PATH,
  PREORDER_PATH,
} from "./constants/paths";
import Home from "./pages/Home";
import FooterComp from "./components/Footer";
import NavBar from "./components/Navbar";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Dash from "./pages/Dashboard";
import Error from "./pages/NotFound";
import Menu from "./pages/Menu";
import Bookings from "./pages/BookingsPage";

export function App() {
  // const themeContext = useContext(ThemeContext);
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <Routes>
          <Route path={INDEX_PATH} element={<Home />} />
          <Route path={SIGNUP_PATH} element={<SignupForm />} />
          <Route path={LOGIN_PATH} element={<LoginForm />} />
          <Route path={CONTACTS_PATH} element={<Contacts />} />
          <Route path={ABOUT_PATH} element={<About />} />
          <Route path={DASHBOARD_PATH} element={<Dash />} />
          <Route path={NOT_FOUND_PATH} element={<Error />} />
          <Route path={MENU_PATH} element={<Menu />} />
          <Route path={BOOKING_PATH} element={<Bookings />} />
          <Route path={TABLE_PATH} element={<Bookings />} />
          <Route path={CLASS_PATH} element={<Bookings />} />
        </Routes>
        <FooterComp />
      </ThemeProvider>
    </>
  );
}
export default App;
