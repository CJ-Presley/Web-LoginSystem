import { useEffect } from "react";
import { Container } from "react-bootstrap";

function Tables() {
  useEffect(() => {
    document.title = "Bean & Brew | Book a Table";
  });
  return (
    <>
      <Container><h1 className="fw-bold border-white-50 border-bottom text-center">Bookings</h1></Container>
    </>
  );
}
export default Tables;
