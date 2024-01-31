import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

function Contacts(){
      useEffect(() => {
        document.title = "Bean & Brew | Contacts";
      });
    return (
      <>
        <Row>
          <h1 className="my-3 fw-bold text-center">Contact Us</h1>
        </Row>
        <Row>
          <p className="text-center fw-bold">
            <a className="px-5 mx-5">Harrogate</a>-
            <a className="px-5 mx-5">Leeds</a>-
            <a className="px-5 mx-5">Knareborough</a>
          </p>
        </Row>
        <Row className="py-3 border border-white-50 rounded">
          <Col>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2356.661372300967!2d-1.5628011871094991!3d53.79551427230796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTPCsDQ3JzQzLjkiTiAxwrAzMyczNi44Ilc!5e0!3m2!1sen!2suk!4v1706700948238!5m2!1sen!2suk"
              width="600"
              height="450"
              loading="lazy"
              className=""
            ></iframe>
          </Col>
          <Col>
            <h2 className="fw-bold text-center underline">Leeds</h2>
            <p className=""></p>
          </Col>
          <Col></Col>
        </Row>
      </>
    );
}
export default Contacts
