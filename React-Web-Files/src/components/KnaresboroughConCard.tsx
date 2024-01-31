import { Row, Col } from "react-bootstrap";

function KnaresboroughContacts() {
  return (
    <>
      <div className="py-5">
        <Row className="py-3 border border-white-50 rounded">
          <Col>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d150.81459748708073!2d-1.4966228866391158!3d54.014503946648205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1706709000155!5m2!1sen!2suk"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </Col>
          <Col>
            <h2 className="fw-bold text-center underline">Knaresborough</h2>
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
                    href="mailto: contact.knares@bean&brew.coffee.uk"
                  >
                    contact.us@bean&brew.coffee.uk
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
                    The River Nidd, Knaresborough,
                    <br />
                    England, United Kingdom,
                    <br />
                    UNDR N1DD
                  </a>
                </h4>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default KnaresboroughContacts;
