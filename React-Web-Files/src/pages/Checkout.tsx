import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";

function Checkout() {
  useEffect(() => {
    document.title = "Bean & Brew | Checkout";
  });
  return (
    <>
      <Container>
        <Row>
          <h1 className="my-3 fw-bold text-center">Checkout</h1>
        </Row>
      </Container>
    </>
  );
}
export default Checkout;
