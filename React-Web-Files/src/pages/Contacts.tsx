import { useEffect } from "react";
import { Col } from "react-bootstrap";

function Contacts(){
      useEffect(() => {
        document.title = "Bean & Brew | Contacts";
      });
    return (
      <>
        <h1 className="my-3 fw-bold text-center">Contact Us</h1>
        <Col className="border-bottom my-3"></Col>
      </>
    );
}
export default Contacts
