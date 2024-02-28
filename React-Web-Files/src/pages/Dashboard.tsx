import { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { AccountDetailsContext } from "../components/accountProvider";
import { useNavigate } from "react-router-dom";
import { INDEX_PATH } from "../constants/paths";

function Dash() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Bean & Brew | Staff Dashboard";
    console.log(accountDetailsContext?.accountDetails?.role);
    if (Number(accountDetailsContext?.accountDetails?.role) < 1) {
      console.log("Redirecting");
      navigate(INDEX_PATH);
    } else if (accountDetailsContext?.accountDetails?.role === undefined) {
      console.log("Redirecting");
      navigate(INDEX_PATH);
    }
  });

  const accountDetailsContext = useContext(AccountDetailsContext);

  return <></>;
}
export default Dash;

// accountDetailsContext?.accountDetails?.role ? false : true
//const navigate = useNavigate();
// navigate('/dashboard');
