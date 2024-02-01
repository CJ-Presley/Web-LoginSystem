import { useEffect } from "react";
import BookingCards from "../components/Bookings";
import { Col, Container } from "react-bootstrap";

function Bookings() {
  useEffect(() => {
    document.title = "Bean & Brew | Home";
  });
  return (
    <>
      <Container>
        <h1 className="my-3 fw-bold text-center">Pre-Orders and Bookings</h1>
        <Col className="border-bottom my-3"></Col>
        <BookingCards />
      </Container>
    </>
  );
}
export default Bookings;
