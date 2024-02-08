import { useEffect } from "react";
import { Container } from "react-bootstrap";

function Classes() {
  useEffect(() => {
    document.title = "Bean & Brew | Classes";
  });
  return (
    <>
      <Container></Container>
    </>
  );
}
export default Classes;
