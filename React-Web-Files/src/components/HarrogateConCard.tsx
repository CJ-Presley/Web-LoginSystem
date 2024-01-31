import { Row, Col } from "react-bootstrap";

function HarrogateContacts() {
  return (
    <>
      <Row className="py-3 border border-white-50 rounded">
        <Col>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d369.4096540879751!2d-1.548969726908375!3d53.99203216957643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1706709120531!5m2!1sen!2suk"
            width="600"
            height="450"
            loading="lazy"
            className=""
          ></iframe>
        </Col>
        <Col>
          <h2 className="fw-bold text-center underline">Harrogate</h2>
          <Row className="pt-5">
            <h4 className="fw-bold">
              <p className="text-secondary">
                Contact Number:{" "}
                <a href="tel: 01632 960592" className="text-dark fw-bold">
                  01632 960592
                </a>
              </p>
            </h4>
          </Row>
          <Row>
            <h4 className="fw-bold">
              <p className="text-secondary">
                Email Address:{" "}
                <a
                  className="text-dark"
                  href="mailto: contact.us@bean&brew.coffee.uk"
                >
                  contact.harrogate@bean&brew.coffee.uk
                </a>
              </p>
            </h4>
          </Row>
          <Row>
            <Col>
              <h4 className="fw-bold">
                <p className="text-secondary">Address: </p>
              </h4>
            </Col>
            <Col xs={9}>
              <h4 className="fw-bold text-left">
                <a
                  className="text-dark "
                  href="https://maps.app.goo.gl/M6vBGQ5xjtpV18oe8"
                >
                  Bean & Brew Coffee Ltd,
                  <br />
                  Valley Gardens, Harrogate,
                  <br />
                  England, United Kingdom,
                  <br />
                  P4RK P0N9
                </a>
              </h4>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
export default HarrogateContacts;
