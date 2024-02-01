import { useEffect } from "react";
import { Container } from "react-bootstrap";

function Dash() {
    useEffect(() => {
      document.title = "Bean & Brew | Staff Dashboard";
    });
  return (
    <>
      <Container></Container>
    </>
  );
}
export default Dash;
