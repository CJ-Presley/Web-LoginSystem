import { useEffect } from "react";
import { Image, Col, Row, Container } from "react-bootstrap";
import Logo from "../assets/Logo2.png";
import SadDino from "../assets/LondonBridge_Cheese (1).png";

function Error() {
  useEffect(() => {
    document.title = "Bean & Brew | 404";
  });
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold text-dark mt-5 pt-5">Error 404:</h1>
            <h3 className="mb-5 pb-5 text-secondary">Page Not Found</h3>
          </Col>
          <Col></Col>
          <Col>
            <Image
              src={Logo}
              alt="Logo"
              width="350"
              className="mt-5 pt-5"
              fluid
            />
          </Col>
        </Row>
        <Row>
          <Image src={SadDino} alt="SadDino" width="" className="pb-5" />
        </Row>
      </Container>
    </>
  );
}
export default Error;
