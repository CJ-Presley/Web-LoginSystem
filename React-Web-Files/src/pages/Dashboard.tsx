import { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { AccountDetailsContext } from "../components/accountProvider";
import { useNavigate } from "react-router-dom";
import { INDEX_PATH } from "../constants/paths";

function Dash() {
  useEffect(() => {
    document.title = "Bean & Brew | Staff Dashboard";
    if (Number(accountDetailsContext?.accountDetails?.role) < 1) {
      console.log("redirecting");
      navigate(INDEX_PATH);
    }
  });
  const navigate = useNavigate();
  const accountDetailsContext = useContext(AccountDetailsContext);

  return <h1></h1>
}
export default Dash;

// accountDetailsContext?.accountDetails?.role ? false : true
//const navigate = useNavigate();
// navigate('/dashboard');
