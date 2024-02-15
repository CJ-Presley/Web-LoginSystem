import { useEffect } from "react";
import { Container } from "react-bootstrap";
import "../css/components.css";
import FormWidget from "../components/TableBookingForm";

function Tables() {
  useEffect(() => {
    document.title = "Bean & Brew | Book a Table";
  });
  return (
    <>
        <FormWidget />
    </>
  );
}
export default Tables;
