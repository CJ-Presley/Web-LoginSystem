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
        <div className="">
          <BookingCards />
        </div>
      </Container>
    </>
  );
}
export default Bookings;
