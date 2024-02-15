import { useEffect } from "react";
import { Container } from "react-bootstrap";
import "../css/components.css";
import TableBookings from "../components/TableBookingForm";

function Tables() {
  useEffect(() => {
    document.title = "Bean & Brew | Book a Table";
  });
  return (
    <>
      <TableBookings />
    </>
  );
}
export default Tables;
