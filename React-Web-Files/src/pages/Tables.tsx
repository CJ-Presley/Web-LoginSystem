import { useEffect } from "react";
import { Container } from "react-bootstrap";

function Tables() {
  useEffect(() => {
    document.title = "Bean & Brew | Book a Table";
  });
  return (
    <>
      <Container></Container>
    </>
  );
}
export default Tables;
